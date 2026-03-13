:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ezaai'
.. highlight: bash

ezaai
=====

.. conda:recipe:: ezaai
   :replaces_section_title:
   :noindex:

   EzAAI is a suite of workflows for improved AAI calculation performance along with the novel module that provides hierarchical clustering analysis and dendrogram representation.

   :homepage: https://endixk.github.io/ezaai
   :developer docs: https://github.com/endixk/ezaai
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ezaai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezaai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezaai/meta.yaml>`_
   :links: doi: :doi:`10.1007/s12275-021-1154-0`

   


.. conda:package:: ezaai

   |downloads_ezaai| |docker_ezaai|

   :versions:
      
      

      ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``

      

   
   :depends on blast: 
   :depends on diamond: 
   :depends on mmseqs2: 
   :depends on openjdk: ``>=8,<9``
   :depends on prodigal: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install ezaai

to add into an existing workspace instead, run::

    pixi add ezaai

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ezaai

Alternatively, to install into a new environment, run::

    conda create -n envname ezaai

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ezaai:<tag>

(see `ezaai/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ezaai| image:: https://img.shields.io/conda/dn/bioconda/ezaai.svg?style=flat
   :target: https://anaconda.org/bioconda/ezaai
   :alt:   (downloads)
.. |docker_ezaai| image:: https://quay.io/repository/biocontainers/ezaai/status
   :target: https://quay.io/repository/biocontainers/ezaai
.. _`ezaai/tags`: https://quay.io/repository/biocontainers/ezaai?tab=tags


.. raw:: html

    <script>
        var package = "ezaai";
        var versions = ["1.2.4","1.2.3","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ezaai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ezaai/README.html
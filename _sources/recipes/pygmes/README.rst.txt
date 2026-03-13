:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygmes'
.. highlight: bash

pygmes
======

.. conda:recipe:: pygmes
   :replaces_section_title:
   :noindex:

   Run GeneMark\-ES using pretrained models

   :homepage: https://github.com/openpaul/pygmes
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`pygmes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygmes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygmes/meta.yaml>`_

   


.. conda:package:: pygmes

   |downloads_pygmes| |docker_pygmes|

   :versions:
      
      

      ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3.4-0``

      

   
   :depends on diamond: ``>=0.8``
   :depends on ete3: 
   :depends on prodigal: ``>=2``
   :depends on pyfaidx: ``>=0.5.8``
   :depends on python: ``>=3.6``

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

    pixi global install pygmes

to add into an existing workspace instead, run::

    pixi add pygmes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pygmes

Alternatively, to install into a new environment, run::

    conda create -n envname pygmes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pygmes:<tag>

(see `pygmes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pygmes| image:: https://img.shields.io/conda/dn/bioconda/pygmes.svg?style=flat
   :target: https://anaconda.org/bioconda/pygmes
   :alt:   (downloads)
.. |docker_pygmes| image:: https://quay.io/repository/biocontainers/pygmes/status
   :target: https://quay.io/repository/biocontainers/pygmes
.. _`pygmes/tags`: https://quay.io/repository/biocontainers/pygmes?tab=tags


.. raw:: html

    <script>
        var package = "pygmes";
        var versions = ["0.1.7","0.1.6","0.1.5","0.1.4","0.1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygmes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygmes/README.html
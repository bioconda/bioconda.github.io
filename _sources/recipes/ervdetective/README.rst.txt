:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ervdetective'
.. highlight: bash

ervdetective
============

.. conda:recipe:: ervdetective
   :replaces_section_title:
   :noindex:

   An efficient pipeline for identification and annotation of endogenous retroviruses \(ERVs\).

   :homepage: https://github.com/ZhijianZhou01/ervdetective
   :license: LGPL / LGPL-2.1-or-later
   :recipe: /`ervdetective <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ervdetective>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ervdetective/meta.yaml>`_

   


.. conda:package:: ervdetective

   |downloads_ervdetective| |docker_ervdetective|

   :versions:
      
      

      ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-0``

      

   
   :depends on biopython: ``>=1.77``
   :depends on blast: ``>=2.9.0``
   :depends on genometools-genometools: ``>=1.6.1``
   :depends on hmmer: ``>=3.0``
   :depends on psutil: ``>=5.9.1``
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

    pixi global install ervdetective

to add into an existing workspace instead, run::

    pixi add ervdetective

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ervdetective

Alternatively, to install into a new environment, run::

    conda create -n envname ervdetective

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ervdetective:<tag>

(see `ervdetective/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ervdetective| image:: https://img.shields.io/conda/dn/bioconda/ervdetective.svg?style=flat
   :target: https://anaconda.org/bioconda/ervdetective
   :alt:   (downloads)
.. |docker_ervdetective| image:: https://quay.io/repository/biocontainers/ervdetective/status
   :target: https://quay.io/repository/biocontainers/ervdetective
.. _`ervdetective/tags`: https://quay.io/repository/biocontainers/ervdetective?tab=tags


.. raw:: html

    <script>
        var package = "ervdetective";
        var versions = ["1.0.9","1.0.9","1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ervdetective/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ervdetective/README.html
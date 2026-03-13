:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pmdtools'
.. highlight: bash

pmdtools
========

.. conda:recipe:: pmdtools
   :replaces_section_title:
   :noindex:

   Compute postmortem damage patterns and decontaminate ancient genomes

   :homepage: https://github.com/pontussk/PMDtools
   :license: GPL-3.0
   :recipe: /`pmdtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmdtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmdtools/meta.yaml>`_
   :links: doi: :doi:`10.1073/pnas.1318934111`

   


.. conda:package:: pmdtools

   |downloads_pmdtools| |docker_pmdtools|

   :versions:
      
      

      ``0.60-5``,  ``0.60-4``,  ``0.60-3``,  ``0.60-2``,  ``0.60-1``

      

   
   :depends on python: 
   :depends on r-base: ``>=4.0``
   :depends on samtools: ``>=1.13``

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

    pixi global install pmdtools

to add into an existing workspace instead, run::

    pixi add pmdtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pmdtools

Alternatively, to install into a new environment, run::

    conda create -n envname pmdtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pmdtools:<tag>

(see `pmdtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pmdtools| image:: https://img.shields.io/conda/dn/bioconda/pmdtools.svg?style=flat
   :target: https://anaconda.org/bioconda/pmdtools
   :alt:   (downloads)
.. |docker_pmdtools| image:: https://quay.io/repository/biocontainers/pmdtools/status
   :target: https://quay.io/repository/biocontainers/pmdtools
.. _`pmdtools/tags`: https://quay.io/repository/biocontainers/pmdtools?tab=tags


.. raw:: html

    <script>
        var package = "pmdtools";
        var versions = ["0.60","0.60","0.60","0.60","0.60"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pmdtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pmdtools/README.html
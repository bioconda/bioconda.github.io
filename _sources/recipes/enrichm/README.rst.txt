:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'enrichm'
.. highlight: bash

enrichm
=======

.. conda:recipe:: enrichm
   :replaces_section_title:
   :noindex:

   EnrichM is a toolbox for comparing the functional composition of population genomes.

   :homepage: https://github.com/geronimp/enrichM
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`enrichm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enrichm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enrichm/meta.yaml>`_

   


.. conda:package:: enrichm

   |downloads_enrichm| |docker_enrichm|

   :versions:
      
      

      ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.5.0-0``

      

   
   :depends on biopython: ``>=1.66``
   :depends on diamond: 
   :depends on fuzzywuzzy: ``>=0.18.0``
   :depends on hmmer: ``>=3.1b``
   :depends on mcl: ``>=14.137``
   :depends on mmseqs2: ``>=2.23394``
   :depends on moreutils: 
   :depends on numpy: ``>=1.9.1``
   :depends on openmpi: 
   :depends on pandas: ``>=0.17.1``
   :depends on parallel: ``>=20180222``
   :depends on prodigal: ``>=2.6.3``
   :depends on python: ``>=3.6``
   :depends on python-dateutil: ``>=2.8.0``
   :depends on r-base: 
   :depends on r-gridextra: 
   :depends on r-optparse: 
   :depends on scikit-learn: 
   :depends on scipy: ``>=0.17.0``
   :depends on seqmagick: 
   :depends on six: ``>=1.10.0``
   :depends on statsmodels: ``>=0.8.0rc1``
   :depends on tempdir: ``>=0.7.1``

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

    pixi global install enrichm

to add into an existing workspace instead, run::

    pixi add enrichm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install enrichm

Alternatively, to install into a new environment, run::

    conda create -n envname enrichm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/enrichm:<tag>

(see `enrichm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_enrichm| image:: https://img.shields.io/conda/dn/bioconda/enrichm.svg?style=flat
   :target: https://anaconda.org/bioconda/enrichm
   :alt:   (downloads)
.. |docker_enrichm| image:: https://quay.io/repository/biocontainers/enrichm/status
   :target: https://quay.io/repository/biocontainers/enrichm
.. _`enrichm/tags`: https://quay.io/repository/biocontainers/enrichm?tab=tags


.. raw:: html

    <script>
        var package = "enrichm";
        var versions = ["0.6.6","0.6.5","0.6.4","0.6.3","0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/enrichm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/enrichm/README.html
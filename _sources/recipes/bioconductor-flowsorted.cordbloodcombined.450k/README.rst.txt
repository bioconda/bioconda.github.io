:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowsorted.cordbloodcombined.450k'
.. highlight: bash

bioconductor-flowsorted.cordbloodcombined.450k
==============================================

.. conda:recipe:: bioconductor-flowsorted.cordbloodcombined.450k
   :replaces_section_title:
   :noindex:

   Illumina 450k\/EPIC data on FACS and MACS umbilical blood cells

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/FlowSorted.CordBloodCombined.450k.html
   :license: GPL-3
   :recipe: /`bioconductor-flowsorted.cordbloodcombined.450k <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsorted.cordbloodcombined.450k>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsorted.cordbloodcombined.450k/meta.yaml>`_

   Raw data objects to be used for umbilical cord blood cell proportion estimation in minfi and similar packages. The FlowSorted.CordBloodCombined.450k object is based in samples assayed by Bakulski et al\, Gervin et al.\, de Goede et al.\, and Lin et al.


.. conda:package:: bioconductor-flowsorted.cordbloodcombined.450k

   |downloads_bioconductor-flowsorted.cordbloodcombined.450k| |docker_bioconductor-flowsorted.cordbloodcombined.450k|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.1-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-minfi: ``>=1.46.0,<1.47.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-flowsorted.cordbloodcombined.450k

   and update with::

      mamba update bioconductor-flowsorted.cordbloodcombined.450k

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowsorted.cordbloodcombined.450k

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowsorted.cordbloodcombined.450k:<tag>

   (see `bioconductor-flowsorted.cordbloodcombined.450k/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowsorted.cordbloodcombined.450k| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowsorted.cordbloodcombined.450k.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowsorted.cordbloodcombined.450k
   :alt:   (downloads)
.. |docker_bioconductor-flowsorted.cordbloodcombined.450k| image:: https://quay.io/repository/biocontainers/bioconductor-flowsorted.cordbloodcombined.450k/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowsorted.cordbloodcombined.450k
.. _`bioconductor-flowsorted.cordbloodcombined.450k/tags`: https://quay.io/repository/biocontainers/bioconductor-flowsorted.cordbloodcombined.450k?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowsorted.cordbloodcombined.450k";
        var versions = ["1.16.0","1.14.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowsorted.cordbloodcombined.450k/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowsorted.cordbloodcombined.450k/README.html
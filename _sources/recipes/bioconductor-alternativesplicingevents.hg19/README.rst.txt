:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alternativesplicingevents.hg19'
.. highlight: bash

bioconductor-alternativesplicingevents.hg19
===========================================

.. conda:recipe:: bioconductor-alternativesplicingevents.hg19
   :replaces_section_title:
   :noindex:

   Alternative splicing event annotation for Human \(hg19\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/alternativeSplicingEvents.hg19.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alternativesplicingevents.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alternativesplicingevents.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alternativesplicingevents.hg19/meta.yaml>`_

   Data frame containing alternative splicing events. The splicing events were compiled from the annotation files used by the alternative splicing quantification tools MISO\, VAST\-TOOLS\, SUPPA and rMATS.


.. conda:package:: bioconductor-alternativesplicingevents.hg19

   |downloads_bioconductor-alternativesplicingevents.hg19| |docker_bioconductor-alternativesplicingevents.hg19|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-3</code>,  <code>1.1.0-2</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.1-7</code>,  <code>1.0.1-6</code>,  <code>1.0.1-5</code>,  <code>1.0.1-4</code>,  <code>1.0.1-3</code>,  </span></summary>
      

      ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-alternativesplicingevents.hg19

   and update with::

      mamba update bioconductor-alternativesplicingevents.hg19

  To create a new environment, run::

      mamba create --name myenvname bioconductor-alternativesplicingevents.hg19

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alternativesplicingevents.hg19:<tag>

   (see `bioconductor-alternativesplicingevents.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alternativesplicingevents.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alternativesplicingevents.hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alternativesplicingevents.hg19
   :alt:   (downloads)
.. |docker_bioconductor-alternativesplicingevents.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-alternativesplicingevents.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alternativesplicingevents.hg19
.. _`bioconductor-alternativesplicingevents.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-alternativesplicingevents.hg19?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alternativesplicingevents.hg19";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alternativesplicingevents.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alternativesplicingevents.hg19/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfsamplecompare'
.. highlight: bash

vcfsamplecompare
================

.. conda:recipe:: vcfsamplecompare
   :replaces_section_title:
   :noindex:

   This script sorts and \(optionally\) filters the rows\/variants of a VCF file \(containing data for 2 or more samples\) based on the differences in the variant data between samples or sample groups. Degree of \"difference\" is determined by either the best possible degree of separation of sample groups by genotype calls or the difference in average allelic frequency of each sample or sample group \(with a gap size threshold\). The pair of samples or sample groups used to represent the difference for a variant row is the one leading to the greatest difference in consistent genotype or average allelic frequencies \(i.e. observation ratios\, e.g. AO\/DP\) of the same variant state. If sample groups are not specified\, the pair of samples leading to the greatest difference is greedily discovered and chosen to represent the variant\/row.

   :homepage: https://github.com/hepcat72/vcfSampleCompare
   :license: GNU
   :recipe: /`vcfsamplecompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfsamplecompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfsamplecompare/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.3565896`

   


.. conda:package:: vcfsamplecompare

   |downloads_vcfsamplecompare| |docker_vcfsamplecompare|

   :versions:
      
      

      ``2.013-2``,  ``2.013-1``,  ``2.013-0``,  ``v2.008-1``,  ``v2.008-0``,  ``v2.006-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install vcfsamplecompare

   and update with::

      mamba update vcfsamplecompare

  To create a new environment, run::

      mamba create --name myenvname vcfsamplecompare

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcfsamplecompare:<tag>

   (see `vcfsamplecompare/tags`_ for valid values for ``<tag>``)


.. |downloads_vcfsamplecompare| image:: https://img.shields.io/conda/dn/bioconda/vcfsamplecompare.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfsamplecompare
   :alt:   (downloads)
.. |docker_vcfsamplecompare| image:: https://quay.io/repository/biocontainers/vcfsamplecompare/status
   :target: https://quay.io/repository/biocontainers/vcfsamplecompare
.. _`vcfsamplecompare/tags`: https://quay.io/repository/biocontainers/vcfsamplecompare?tab=tags


.. raw:: html

    <script>
        var package = "vcfsamplecompare";
        var versions = ["2.013","2.013","2.013","v2.008","v2.008"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfsamplecompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfsamplecompare/README.html
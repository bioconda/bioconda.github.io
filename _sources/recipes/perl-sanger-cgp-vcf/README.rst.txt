:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sanger-cgp-vcf'
.. highlight: bash

perl-sanger-cgp-vcf
===================

.. conda:recipe:: perl-sanger-cgp-vcf
   :replaces_section_title:
   :noindex:

   a set of common perl utilities for generating consistent Vcf headers

   :homepage: https://github.com/cancerit/cgpVcf
   :license: GPLv3
   :recipe: /`perl-sanger-cgp-vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-vcf/meta.yaml>`_

   


.. conda:package:: perl-sanger-cgp-vcf

   |downloads_perl-sanger-cgp-vcf| |docker_perl-sanger-cgp-vcf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.1-6</code>,  <code>2.2.1-5</code>,  <code>2.2.1-4</code>,  <code>2.2.1-3</code>,  <code>2.2.1-2</code>,  <code>2.2.1-1</code>,  <code>2.2.1-0</code>,  <code>1.3.1-3</code>,  <code>1.3.1-2</code>,  </span></summary>
      

      ``2.2.1-6``,  ``2.2.1-5``,  ``2.2.1-4``,  ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-const-fast: 
   :depends perl-data-uuid: 
   :depends perl-datetime: 
   :depends perl-ipc-system-simple: 
   :depends perl-test-fatal: 
   :depends perl-vcftools-vcf: ``0.1.16``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sanger-cgp-vcf

   and update with::

      conda update perl-sanger-cgp-vcf

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sanger-cgp-vcf:<tag>

   (see `perl-sanger-cgp-vcf/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sanger-cgp-vcf| image:: https://img.shields.io/conda/dn/bioconda/perl-sanger-cgp-vcf.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sanger-cgp-vcf
   :alt:   (downloads)
.. |docker_perl-sanger-cgp-vcf| image:: https://quay.io/repository/biocontainers/perl-sanger-cgp-vcf/status
   :target: https://quay.io/repository/biocontainers/perl-sanger-cgp-vcf
.. _`perl-sanger-cgp-vcf/tags`: https://quay.io/repository/biocontainers/perl-sanger-cgp-vcf?tab=tags


.. raw:: html

    <script>
        var package = "perl-sanger-cgp-vcf";
        var versions = ["2.2.1","2.2.1","2.2.1","2.2.1","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sanger-cgp-vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sanger-cgp-vcf/README.html
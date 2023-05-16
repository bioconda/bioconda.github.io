:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-set-intervaltree'
.. highlight: bash

perl-set-intervaltree
=====================

.. conda:recipe:: perl-set-intervaltree
   :replaces_section_title:
   :noindex:

   An interval tree implementation in PERL.

   :homepage: https://metacpan.org/pod/Set::IntervalTree
   :license: perl_5
   :recipe: /`perl-set-intervaltree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-set-intervaltree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-set-intervaltree/meta.yaml>`_

   


.. conda:package:: perl-set-intervaltree

   |downloads_perl-set-intervaltree| |docker_perl-set-intervaltree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12-3</code>,  <code>0.12-2</code>,  <code>0.12-1</code>,  <code>0.12-0</code>,  <code>0.11-1</code>,  <code>0.11-0</code>,  <code>0.10-4</code>,  <code>0.10-3</code>,  <code>0.10-2</code>,  </span></summary>
      

      ``0.12-3``,  ``0.12-2``,  ``0.12-1``,  ``0.12-0``,  ``0.11-1``,  ``0.11-0``,  ``0.10-4``,  ``0.10-3``,  ``0.10-2``,  ``0.10-1``,  ``0.10-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-set-intervaltree

   and update with::

      conda update perl-set-intervaltree

   or use the docker container::

      docker pull quay.io/biocontainers/perl-set-intervaltree:<tag>

   (see `perl-set-intervaltree/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-set-intervaltree| image:: https://img.shields.io/conda/dn/bioconda/perl-set-intervaltree.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-set-intervaltree
   :alt:   (downloads)
.. |docker_perl-set-intervaltree| image:: https://quay.io/repository/biocontainers/perl-set-intervaltree/status
   :target: https://quay.io/repository/biocontainers/perl-set-intervaltree
.. _`perl-set-intervaltree/tags`: https://quay.io/repository/biocontainers/perl-set-intervaltree?tab=tags


.. raw:: html

    <script>
        var package = "perl-set-intervaltree";
        var versions = ["0.12","0.12","0.12","0.12","0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-set-intervaltree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-set-intervaltree/README.html
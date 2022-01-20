:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-dbi'
.. highlight: bash

perl-dbi
========

.. conda:recipe:: perl-dbi
   :replaces_section_title:
   :noindex:

   Database independent interface for Perl

   :homepage: http://dbi.perl.org/
   :license: perl_5
   :recipe: /`perl-dbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbi/meta.yaml>`_

   


.. conda:package:: perl-dbi

   |downloads_perl-dbi| |docker_perl-dbi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.642-1</code>,  <code>1.642-0</code>,  <code>1.641-2</code>,  <code>1.641-1</code>,  <code>1.641-0</code>,  <code>1.640-0</code>,  <code>1.636-0</code>,  <code>1.634-2</code>,  <code>1.634-1</code>,  </span></summary>
      

      ``1.642-1``,  ``1.642-0``,  ``1.641-2``,  ``1.641-1``,  ``1.641-0``,  ``1.640-0``,  ``1.636-0``,  ``1.634-2``,  ``1.634-1``,  ``1.634-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-dbi

   and update with::

      conda update perl-dbi

   or use the docker container::

      docker pull quay.io/biocontainers/perl-dbi:<tag>

   (see `perl-dbi/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-dbi| image:: https://img.shields.io/conda/dn/bioconda/perl-dbi.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-dbi
   :alt:   (downloads)
.. |docker_perl-dbi| image:: https://quay.io/repository/biocontainers/perl-dbi/status
   :target: https://quay.io/repository/biocontainers/perl-dbi
.. _`perl-dbi/tags`: https://quay.io/repository/biocontainers/perl-dbi?tab=tags


.. raw:: html

    <script>
        var package = "perl-dbi";
        var versions = ["1.642","1.642","1.641","1.641","1.641"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dbi/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-scalar-list-utils'
.. highlight: bash

perl-scalar-list-utils
======================

.. conda:recipe:: perl-scalar-list-utils
   :replaces_section_title:
   :noindex:

   Common Scalar and List utility subroutines

   :homepage: http://metacpan.org/pod/Scalar-List-Utils
   :license: perl_5
   :recipe: /`perl-scalar-list-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-scalar-list-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-scalar-list-utils/meta.yaml>`_

   


.. conda:package:: perl-scalar-list-utils

   |downloads_perl-scalar-list-utils| |docker_perl-scalar-list-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.62-0</code>,  <code>1.61-1</code>,  <code>1.61-0</code>,  <code>1.60-0</code>,  <code>1.52-1</code>,  <code>1.52-0</code>,  <code>1.51-0</code>,  <code>1.50-0</code>,  <code>1.45-4</code>,  </span></summary>
      

      ``1.62-0``,  ``1.61-1``,  ``1.61-0``,  ``1.60-0``,  ``1.52-1``,  ``1.52-0``,  ``1.51-0``,  ``1.50-0``,  ``1.45-4``,  ``1.45-3``,  ``1.45-2``,  ``1.45-1``,  ``1.45-0``,  ``1.42-3``,  ``1.42-2``,  ``1.42-1``,  ``1.42-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-scalar-list-utils

   and update with::

      conda update perl-scalar-list-utils

   or use the docker container::

      docker pull quay.io/biocontainers/perl-scalar-list-utils:<tag>

   (see `perl-scalar-list-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-scalar-list-utils| image:: https://img.shields.io/conda/dn/bioconda/perl-scalar-list-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-scalar-list-utils
   :alt:   (downloads)
.. |docker_perl-scalar-list-utils| image:: https://quay.io/repository/biocontainers/perl-scalar-list-utils/status
   :target: https://quay.io/repository/biocontainers/perl-scalar-list-utils
.. _`perl-scalar-list-utils/tags`: https://quay.io/repository/biocontainers/perl-scalar-list-utils?tab=tags


.. raw:: html

    <script>
        var package = "perl-scalar-list-utils";
        var versions = ["1.62","1.61","1.61","1.60","1.52"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-scalar-list-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-scalar-list-utils/README.html
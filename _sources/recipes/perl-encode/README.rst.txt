:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-encode'
.. highlight: bash

perl-encode
===========

.. conda:recipe:: perl-encode
   :replaces_section_title:
   :noindex:

   allows you to write your script in non\-ASCII and non\-UTF\-8

   :homepage: http://metacpan.org/pod/Encode
   :license: perl_5
   :recipe: /`perl-encode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-encode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-encode/meta.yaml>`_

   


.. conda:package:: perl-encode

   |downloads_perl-encode| |docker_perl-encode|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.19-1</code>,  <code>3.19-0</code>,  <code>3.18-1</code>,  <code>3.18-0</code>,  <code>3.17-0</code>,  <code>3.16-1</code>,  <code>3.16-0</code>,  <code>2.88-2</code>,  <code>2.88-1</code>,  </span></summary>
      

      ``3.19-1``,  ``3.19-0``,  ``3.18-1``,  ``3.18-0``,  ``3.17-0``,  ``3.16-1``,  ``3.16-0``,  ``2.88-2``,  ``2.88-1``,  ``2.88-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-exporter: 
   :depends perl-parent: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-encode

   and update with::

      conda update perl-encode

   or use the docker container::

      docker pull quay.io/biocontainers/perl-encode:<tag>

   (see `perl-encode/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-encode| image:: https://img.shields.io/conda/dn/bioconda/perl-encode.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-encode
   :alt:   (downloads)
.. |docker_perl-encode| image:: https://quay.io/repository/biocontainers/perl-encode/status
   :target: https://quay.io/repository/biocontainers/perl-encode
.. _`perl-encode/tags`: https://quay.io/repository/biocontainers/perl-encode?tab=tags


.. raw:: html

    <script>
        var package = "perl-encode";
        var versions = ["3.19","3.19","3.18","3.18","3.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-encode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-encode/README.html
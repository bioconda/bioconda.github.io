:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-gd'
.. highlight: bash

perl-gd
=======

.. conda:recipe:: perl-gd
   :replaces_section_title:
   :noindex:

   Perl interface to the gd2 graphics library

   :homepage: http://metacpan.org/pod/GD
   :license: perl_5
   :recipe: /`perl-gd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gd/meta.yaml>`_

   


.. conda:package:: perl-gd

   |downloads_perl-gd| |docker_perl-gd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.76-1</code>,  <code>2.76-0</code>,  <code>2.74-0</code>,  <code>2.71-0</code>,  <code>2.70-1</code>,  <code>2.70-0</code>,  <code>2.69-0</code>,  <code>2.68-0</code>,  <code>2.56-9</code>,  </span></summary>
      

      ``2.76-1``,  ``2.76-0``,  ``2.74-0``,  ``2.71-0``,  ``2.70-1``,  ``2.70-0``,  ``2.69-0``,  ``2.68-0``,  ``2.56-9``,  ``2.56-8``,  ``2.56-7``,  ``2.56-6``,  ``2.56-5``,  ``2.56-4``,  ``2.56-3``,  ``2.56-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libgd: ``>=2.3.3,<2.4.0a0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-gd

   and update with::

      conda update perl-gd

   or use the docker container::

      docker pull quay.io/biocontainers/perl-gd:<tag>

   (see `perl-gd/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-gd| image:: https://img.shields.io/conda/dn/bioconda/perl-gd.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-gd
   :alt:   (downloads)
.. |docker_perl-gd| image:: https://quay.io/repository/biocontainers/perl-gd/status
   :target: https://quay.io/repository/biocontainers/perl-gd
.. _`perl-gd/tags`: https://quay.io/repository/biocontainers/perl-gd?tab=tags


.. raw:: html

    <script>
        var package = "perl-gd";
        var versions = ["2.76","2.76","2.74","2.71","2.70"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gd/README.html
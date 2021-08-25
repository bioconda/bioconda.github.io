:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-image-info'
.. highlight: bash

perl-image-info
===============

.. conda:recipe:: perl-image-info
   :replaces_section_title:
   :noindex:

   Extract meta information from image files

   :homepage: http://metacpan.org/pod/Image-Info
   :license: perl_5
   :recipe: /`perl-image-info <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-image-info>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-image-info/meta.yaml>`_

   


.. conda:package:: perl-image-info

   |downloads_perl-image-info| |docker_perl-image-info|

   :versions:
      
      

      ``1.38-1``,  ``1.38-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-io-stringy: 
   :depends perl-xml-libxml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-image-info

   and update with::

      conda update perl-image-info

   or use the docker container::

      docker pull quay.io/biocontainers/perl-image-info:<tag>

   (see `perl-image-info/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-image-info| image:: https://img.shields.io/conda/dn/bioconda/perl-image-info.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-image-info
   :alt:   (downloads)
.. |docker_perl-image-info| image:: https://quay.io/repository/biocontainers/perl-image-info/status
   :target: https://quay.io/repository/biocontainers/perl-image-info
.. _`perl-image-info/tags`: https://quay.io/repository/biocontainers/perl-image-info?tab=tags


.. raw:: html

    <script>
        var package = "perl-image-info";
        var versions = ["1.38","1.38"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-image-info/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-image-info/README.html
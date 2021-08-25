:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-tiny'
.. highlight: bash

perl-http-tiny
==============

.. conda:recipe:: perl-http-tiny/0.076
   :replaces_section_title:
   :noindex:

   A small\, simple\, correct HTTP\/1.1 client

   :homepage: https://github.com/chansen/p5-http-tiny
   :license: perl_5
   :recipe: /`perl-http-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-tiny>`_/`0.076 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-tiny/0.076>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-tiny/0.076/meta.yaml>`_

   


.. conda:package:: perl-http-tiny

   |downloads_perl-http-tiny| |docker_perl-http-tiny|

   :versions:
      
      

      ``0.076-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-carp: 
   :depends perl-mime-base64: 
   :depends perl-socket: 
   :depends perl-time-local: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-http-tiny

   and update with::

      conda update perl-http-tiny

   or use the docker container::

      docker pull quay.io/biocontainers/perl-http-tiny:<tag>

   (see `perl-http-tiny/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-http-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-http-tiny.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-http-tiny
   :alt:   (downloads)
.. |docker_perl-http-tiny| image:: https://quay.io/repository/biocontainers/perl-http-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-http-tiny
.. _`perl-http-tiny/tags`: https://quay.io/repository/biocontainers/perl-http-tiny?tab=tags


.. raw:: html

    <script>
        var package = "perl-http-tiny";
        var versions = ["0.076"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-tiny/README.html
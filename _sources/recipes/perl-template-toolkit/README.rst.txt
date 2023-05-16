:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-template-toolkit'
.. highlight: bash

perl-template-toolkit
=====================

.. conda:recipe:: perl-template-toolkit
   :replaces_section_title:
   :noindex:

   comprehensive template processing system

   :homepage: https://metacpan.org/pod/Template::Toolkit
   :license: perl_5
   :recipe: /`perl-template-toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-template-toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-template-toolkit/meta.yaml>`_

   


.. conda:package:: perl-template-toolkit

   |downloads_perl-template-toolkit| |docker_perl-template-toolkit|

   :versions:
      
      

      ``3.100-2``,  ``3.100-1``,  ``3.100-0``,  ``3.010-1``,  ``3.010-0``,  ``2.26-2``,  ``2.26-1``,  ``2.26-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-appconfig: 
   :depends perl-image-info: 
   :depends perl-image-size: 
   :depends perl-test-leaktrace: ``0.17.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-template-toolkit

   and update with::

      conda update perl-template-toolkit

   or use the docker container::

      docker pull quay.io/biocontainers/perl-template-toolkit:<tag>

   (see `perl-template-toolkit/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-template-toolkit| image:: https://img.shields.io/conda/dn/bioconda/perl-template-toolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-template-toolkit
   :alt:   (downloads)
.. |docker_perl-template-toolkit| image:: https://quay.io/repository/biocontainers/perl-template-toolkit/status
   :target: https://quay.io/repository/biocontainers/perl-template-toolkit
.. _`perl-template-toolkit/tags`: https://quay.io/repository/biocontainers/perl-template-toolkit?tab=tags


.. raw:: html

    <script>
        var package = "perl-template-toolkit";
        var versions = ["3.100","3.100","3.100","3.010","3.010"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-template-toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-template-toolkit/README.html
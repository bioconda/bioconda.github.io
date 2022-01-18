:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-set-scalar'
.. highlight: bash

perl-set-scalar
===============

.. conda:recipe:: perl-set-scalar
   :replaces_section_title:
   :noindex:

   basic set operations

   :homepage: http://metacpan.org/pod/Set-Scalar
   :license: perl_5
   :recipe: /`perl-set-scalar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-set-scalar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-set-scalar/meta.yaml>`_

   


.. conda:package:: perl-set-scalar

   |downloads_perl-set-scalar| |docker_perl-set-scalar|

   :versions:
      
      

      ``1.29-3``,  ``1.29-2``,  ``1.29-1``,  ``1.29-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-set-scalar

   and update with::

      conda update perl-set-scalar

   or use the docker container::

      docker pull quay.io/biocontainers/perl-set-scalar:<tag>

   (see `perl-set-scalar/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-set-scalar| image:: https://img.shields.io/conda/dn/bioconda/perl-set-scalar.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-set-scalar
   :alt:   (downloads)
.. |docker_perl-set-scalar| image:: https://quay.io/repository/biocontainers/perl-set-scalar/status
   :target: https://quay.io/repository/biocontainers/perl-set-scalar
.. _`perl-set-scalar/tags`: https://quay.io/repository/biocontainers/perl-set-scalar?tab=tags


.. raw:: html

    <script>
        var package = "perl-set-scalar";
        var versions = ["1.29","1.29","1.29","1.29"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-set-scalar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-set-scalar/README.html
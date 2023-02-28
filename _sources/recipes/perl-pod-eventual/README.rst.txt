:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-eventual'
.. highlight: bash

perl-pod-eventual
=================

.. conda:recipe:: perl-pod-eventual
   :replaces_section_title:
   :noindex:

   read a POD document as a series of trivial events

   :homepage: https://github.com/rjbs/Pod-Eventual
   :license: perl_5
   :recipe: /`perl-pod-eventual <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-eventual>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-eventual/meta.yaml>`_

   


.. conda:package:: perl-pod-eventual

   |downloads_perl-pod-eventual| |docker_perl-pod-eventual|

   :versions:
      
      

      ``0.094003-0``,  ``0.094002-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-mixin-linewise: 
   :depends perl-test-deep: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-pod-eventual

   and update with::

      conda update perl-pod-eventual

   or use the docker container::

      docker pull quay.io/biocontainers/perl-pod-eventual:<tag>

   (see `perl-pod-eventual/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pod-eventual| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-eventual.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pod-eventual
   :alt:   (downloads)
.. |docker_perl-pod-eventual| image:: https://quay.io/repository/biocontainers/perl-pod-eventual/status
   :target: https://quay.io/repository/biocontainers/perl-pod-eventual
.. _`perl-pod-eventual/tags`: https://quay.io/repository/biocontainers/perl-pod-eventual?tab=tags


.. raw:: html

    <script>
        var package = "perl-pod-eventual";
        var versions = ["0.094003","0.094002"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-eventual/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-eventual/README.html
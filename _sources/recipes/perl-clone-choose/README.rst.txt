:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-clone-choose'
.. highlight: bash

perl-clone-choose
=================

.. conda:recipe:: perl-clone-choose
   :replaces_section_title:
   :noindex:

   Choose appropriate clone utility

   :homepage: https://metacpan.org/release/Clone-Choose
   :license: perl_5
   :recipe: /`perl-clone-choose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-clone-choose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-clone-choose/meta.yaml>`_

   


.. conda:package:: perl-clone-choose

   |downloads_perl-clone-choose| |docker_perl-clone-choose|

   :versions:
      
      

      ``0.010-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-storable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-clone-choose

   and update with::

      conda update perl-clone-choose

   or use the docker container::

      docker pull quay.io/biocontainers/perl-clone-choose:<tag>

   (see `perl-clone-choose/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-clone-choose| image:: https://img.shields.io/conda/dn/bioconda/perl-clone-choose.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-clone-choose
   :alt:   (downloads)
.. |docker_perl-clone-choose| image:: https://quay.io/repository/biocontainers/perl-clone-choose/status
   :target: https://quay.io/repository/biocontainers/perl-clone-choose
.. _`perl-clone-choose/tags`: https://quay.io/repository/biocontainers/perl-clone-choose?tab=tags


.. raw:: html

    <script>
        var package = "perl-clone-choose";
        var versions = ["0.010"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-clone-choose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-clone-choose/README.html
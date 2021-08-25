:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-dumbbench'
.. highlight: bash

perl-dumbbench
==============

.. conda:recipe:: perl-dumbbench/0.111
   :replaces_section_title:
   :noindex:

   More reliable benchmarking with the least amount of thinking

   :homepage: https://github.com/briandfoy/dumbbench
   :license: perl_5
   :recipe: /`perl-dumbbench <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dumbbench>`_/`0.111 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dumbbench/0.111>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dumbbench/0.111/meta.yaml>`_

   


.. conda:package:: perl-dumbbench

   |downloads_perl-dumbbench| |docker_perl-dumbbench|

   :versions:
      
      

      ``0.111-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-capture-tiny: 
   :depends perl-carp: 
   :depends perl-class-xsaccessor: 
   :depends perl-devel-checkos: 
   :depends perl-number-witherror: 
   :depends perl-params-util: 
   :depends perl-parent: 
   :depends perl-statistics-caseresampling: 
   :depends perl-time-hires: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-dumbbench

   and update with::

      conda update perl-dumbbench

   or use the docker container::

      docker pull quay.io/biocontainers/perl-dumbbench:<tag>

   (see `perl-dumbbench/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-dumbbench| image:: https://img.shields.io/conda/dn/bioconda/perl-dumbbench.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-dumbbench
   :alt:   (downloads)
.. |docker_perl-dumbbench| image:: https://quay.io/repository/biocontainers/perl-dumbbench/status
   :target: https://quay.io/repository/biocontainers/perl-dumbbench
.. _`perl-dumbbench/tags`: https://quay.io/repository/biocontainers/perl-dumbbench?tab=tags


.. raw:: html

    <script>
        var package = "perl-dumbbench";
        var versions = ["0.111"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dumbbench/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dumbbench/README.html
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
      
      

      ``0.111-1``,  ``0.111-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-dumbbench

   and update with::

      mamba update perl-dumbbench

  To create a new environment, run::

      mamba create --name myenvname perl-dumbbench

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["0.111","0.111"];
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
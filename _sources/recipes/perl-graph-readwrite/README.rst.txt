:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-graph-readwrite'
.. highlight: bash

perl-graph-readwrite
====================

.. conda:recipe:: perl-graph-readwrite
   :replaces_section_title:
   :noindex:

   modules for reading and writing directed graphs

   :homepage: https://github.com/neilb/Graph-ReadWrite
   :license: perl_5
   :recipe: /`perl-graph-readwrite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graph-readwrite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graph-readwrite/meta.yaml>`_

   


.. conda:package:: perl-graph-readwrite

   |downloads_perl-graph-readwrite| |docker_perl-graph-readwrite|

   :versions:
      
      

      ``2.10-0``,  ``2.09-3``,  ``2.09-2``,  ``2.09-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-graph: 
   :depends perl-parent: 
   :depends perl-parse-yapp: 
   :depends perl-xml-parser: 
   :depends perl-xml-writer: 
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

      mamba install perl-graph-readwrite

   and update with::

      mamba update perl-graph-readwrite

  To create a new environment, run::

      mamba create --name myenvname perl-graph-readwrite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-graph-readwrite:<tag>

   (see `perl-graph-readwrite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-graph-readwrite| image:: https://img.shields.io/conda/dn/bioconda/perl-graph-readwrite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-graph-readwrite
   :alt:   (downloads)
.. |docker_perl-graph-readwrite| image:: https://quay.io/repository/biocontainers/perl-graph-readwrite/status
   :target: https://quay.io/repository/biocontainers/perl-graph-readwrite
.. _`perl-graph-readwrite/tags`: https://quay.io/repository/biocontainers/perl-graph-readwrite?tab=tags


.. raw:: html

    <script>
        var package = "perl-graph-readwrite";
        var versions = ["2.10","2.09","2.09","2.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-graph-readwrite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-graph-readwrite/README.html
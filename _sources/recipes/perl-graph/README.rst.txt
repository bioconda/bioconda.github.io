:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-graph'
.. highlight: bash

perl-graph
==========

.. conda:recipe:: perl-graph
   :replaces_section_title:
   :noindex:

   a Perl extension for keeping data partially sorted

   :homepage: http://metacpan.org/pod/Graph
   :license: perl_5
   :recipe: /`perl-graph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graph/meta.yaml>`_

   


.. conda:package:: perl-graph

   |downloads_perl-graph| |docker_perl-graph|

   :versions:
      
      

      ``0.9730-0``,  ``0.9729-0``,  ``0.9728-0``,  ``0.9727-0``,  ``0.9726-0``,  ``0.9725-0``,  ``0.9704-2``,  ``0.9704-1``,  ``0.9704-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-heap: ``>=0.80``
   :depends perl-safe: 
   :depends perl-scalar-list-utils: 
   :depends perl-set-object: ``>=1.40``
   :depends perl-storable: ``>=2.05``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-graph

   and update with::

      mamba update perl-graph

  To create a new environment, run::

      mamba create --name myenvname perl-graph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-graph:<tag>

   (see `perl-graph/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-graph| image:: https://img.shields.io/conda/dn/bioconda/perl-graph.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-graph
   :alt:   (downloads)
.. |docker_perl-graph| image:: https://quay.io/repository/biocontainers/perl-graph/status
   :target: https://quay.io/repository/biocontainers/perl-graph
.. _`perl-graph/tags`: https://quay.io/repository/biocontainers/perl-graph?tab=tags


.. raw:: html

    <script>
        var package = "perl-graph";
        var versions = ["0.9730","0.9729","0.9728","0.9727","0.9726"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-graph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-graph/README.html
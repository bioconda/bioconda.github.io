:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dagchainer'
.. highlight: bash

dagchainer
==========

.. conda:recipe:: dagchainer
   :replaces_section_title:
   :noindex:

   DAGchainer identifies syntenic regions.

   :homepage: https://github.com/kullrich/dagchainer
   :license: MIT
   :recipe: /`dagchainer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dagchainer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dagchainer/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bth397`

   DAGchainer identifies chains of gene pairs sharing conserved order between genomic regions\, by identifying paths through a directed acyclic graph \(DAG\).


.. conda:package:: dagchainer

   |downloads_dagchainer| |docker_dagchainer|

   :versions:
      
      

      ``r120920-5``,  ``r120920-4``,  ``r120920-3``,  ``r120920-2``,  ``r120920-1``,  ``r120920-0``,  ``r111120-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends perl-carp: 
   :depends perl-data-dumper: 
   :depends perl-getopt-long: ``>=2.58,<3.0a0``
   :depends perl-local-lib: 
   :depends perl-storable: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install dagchainer

   and update with::

      mamba update dagchainer

  To create a new environment, run::

      mamba create --name myenvname dagchainer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dagchainer:<tag>

   (see `dagchainer/tags`_ for valid values for ``<tag>``)


.. |downloads_dagchainer| image:: https://img.shields.io/conda/dn/bioconda/dagchainer.svg?style=flat
   :target: https://anaconda.org/bioconda/dagchainer
   :alt:   (downloads)
.. |docker_dagchainer| image:: https://quay.io/repository/biocontainers/dagchainer/status
   :target: https://quay.io/repository/biocontainers/dagchainer
.. _`dagchainer/tags`: https://quay.io/repository/biocontainers/dagchainer?tab=tags


.. raw:: html

    <script>
        var package = "dagchainer";
        var versions = ["r120920","r120920","r120920","r120920","r120920"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dagchainer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dagchainer/README.html
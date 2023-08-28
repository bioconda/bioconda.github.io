:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-algorithm-cluster'
.. highlight: bash

perl-algorithm-cluster
======================

.. conda:recipe:: perl-algorithm-cluster
   :replaces_section_title:
   :noindex:

   Perl interface to the C Clustering Library

   :homepage: http://metacpan.org/pod/Algorithm::Cluster
   :license: unknown
   :recipe: /`perl-algorithm-cluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-algorithm-cluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-algorithm-cluster/meta.yaml>`_

   


.. conda:package:: perl-algorithm-cluster

   |downloads_perl-algorithm-cluster| |docker_perl-algorithm-cluster|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.59-3</code>,  <code>1.59-2</code>,  <code>1.59-1</code>,  <code>1.59-0</code>,  <code>1.58-1</code>,  <code>1.58-0</code>,  <code>1.57-0</code>,  <code>1.56-0</code>,  <code>1.52-1</code>,  </span></summary>
      

      ``1.59-3``,  ``1.59-2``,  ``1.59-1``,  ``1.59-0``,  ``1.58-1``,  ``1.58-0``,  ``1.57-0``,  ``1.56-0``,  ``1.52-1``,  ``1.52-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install perl-algorithm-cluster

   and update with::

      mamba update perl-algorithm-cluster

  To create a new environment, run::

      mamba create --name myenvname perl-algorithm-cluster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-algorithm-cluster:<tag>

   (see `perl-algorithm-cluster/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-algorithm-cluster| image:: https://img.shields.io/conda/dn/bioconda/perl-algorithm-cluster.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-algorithm-cluster
   :alt:   (downloads)
.. |docker_perl-algorithm-cluster| image:: https://quay.io/repository/biocontainers/perl-algorithm-cluster/status
   :target: https://quay.io/repository/biocontainers/perl-algorithm-cluster
.. _`perl-algorithm-cluster/tags`: https://quay.io/repository/biocontainers/perl-algorithm-cluster?tab=tags


.. raw:: html

    <script>
        var package = "perl-algorithm-cluster";
        var versions = ["1.59","1.59","1.59","1.59","1.58"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-algorithm-cluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-algorithm-cluster/README.html
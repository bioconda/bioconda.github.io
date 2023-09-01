:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jasminesv'
.. highlight: bash

jasminesv
=========

.. conda:recipe:: jasminesv
   :replaces_section_title:
   :noindex:

   Software for merging structural variants between individuals

   :homepage: https://github.com/mkirsche/Jasmine
   :license: MIT
   :recipe: /`jasminesv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jasminesv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jasminesv/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`jasminesv`

   


.. conda:package:: jasminesv

   |downloads_jasminesv| |docker_jasminesv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.5-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.11-1</code>,  <code>1.0.11-0</code>,  </span></summary>
      

      ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.11-1``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends irissv: ``>=1.0.4``
   :depends openjdk: ``>=11.0.1``
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

      mamba install jasminesv

   and update with::

      mamba update jasminesv

  To create a new environment, run::

      mamba create --name myenvname jasminesv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jasminesv:<tag>

   (see `jasminesv/tags`_ for valid values for ``<tag>``)


.. |downloads_jasminesv| image:: https://img.shields.io/conda/dn/bioconda/jasminesv.svg?style=flat
   :target: https://anaconda.org/bioconda/jasminesv
   :alt:   (downloads)
.. |docker_jasminesv| image:: https://quay.io/repository/biocontainers/jasminesv/status
   :target: https://quay.io/repository/biocontainers/jasminesv
.. _`jasminesv/tags`: https://quay.io/repository/biocontainers/jasminesv?tab=tags


.. raw:: html

    <script>
        var package = "jasminesv";
        var versions = ["1.1.5","1.1.4","1.1.3","1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jasminesv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jasminesv/README.html
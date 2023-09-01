:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rabix-bunny'
.. highlight: bash

rabix-bunny
===========

.. conda:recipe:: rabix-bunny
   :replaces_section_title:
   :noindex:

   Open\-source development kit for the Common Workflow Language from Seven Bridges. The Rabix executor Bunny\, which can be used to execute apps locally from the command line.

   :homepage: https://github.com/rabix/bunny
   :license: Apache v2
   :recipe: /`rabix-bunny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rabix-bunny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rabix-bunny/meta.yaml>`_

   


.. conda:package:: rabix-bunny

   |downloads_rabix-bunny| |docker_rabix-bunny|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.4-9</code>,  <code>1.0.4-8</code>,  <code>1.0.4-7</code>,  <code>1.0.4-6</code>,  <code>1.0.4-5</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-1</code>,  <code>1.0.2-0</code>,  </span></summary>
      

      ``1.0.4-9``,  ``1.0.4-8``,  ``1.0.4-7``,  ``1.0.4-6``,  ``1.0.4-5``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0rc5-1``,  ``1.0.0rc5-0``,  ``1.0.0rc4-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8,<9``
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

      mamba install rabix-bunny

   and update with::

      mamba update rabix-bunny

  To create a new environment, run::

      mamba create --name myenvname rabix-bunny

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rabix-bunny:<tag>

   (see `rabix-bunny/tags`_ for valid values for ``<tag>``)


.. |downloads_rabix-bunny| image:: https://img.shields.io/conda/dn/bioconda/rabix-bunny.svg?style=flat
   :target: https://anaconda.org/bioconda/rabix-bunny
   :alt:   (downloads)
.. |docker_rabix-bunny| image:: https://quay.io/repository/biocontainers/rabix-bunny/status
   :target: https://quay.io/repository/biocontainers/rabix-bunny
.. _`rabix-bunny/tags`: https://quay.io/repository/biocontainers/rabix-bunny?tab=tags


.. raw:: html

    <script>
        var package = "rabix-bunny";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rabix-bunny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rabix-bunny/README.html
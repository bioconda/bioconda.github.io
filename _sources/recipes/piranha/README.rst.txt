:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piranha'
.. highlight: bash

piranha
=======

.. conda:recipe:: piranha
   :replaces_section_title:
   :noindex:

   Piranha is a peak\-caller for CLIP\- and RIP\-Seq data.

   :homepage: http://smithlabresearch.org/software/piranha/
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`piranha <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piranha>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piranha/meta.yaml>`_

   


.. conda:package:: piranha

   |downloads_piranha| |docker_piranha|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-11</code>,  <code>1.2.1-10</code>,  <code>1.2.1-9</code>,  <code>1.2.1-8</code>,  <code>1.2.1-7</code>,  <code>1.2.1-6</code>,  <code>1.2.1-5</code>,  <code>1.2.1-3</code>,  <code>1.2.1-2</code>,  </span></summary>
      

      ``1.2.1-11``,  ``1.2.1-10``,  ``1.2.1-9``,  ``1.2.1-8``,  ``1.2.1-7``,  ``1.2.1-6``,  ``1.2.1-5``,  ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends python_abi: ``2.7.* *_cp27mu``
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

      mamba install piranha

   and update with::

      mamba update piranha

  To create a new environment, run::

      mamba create --name myenvname piranha

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/piranha:<tag>

   (see `piranha/tags`_ for valid values for ``<tag>``)


.. |downloads_piranha| image:: https://img.shields.io/conda/dn/bioconda/piranha.svg?style=flat
   :target: https://anaconda.org/bioconda/piranha
   :alt:   (downloads)
.. |docker_piranha| image:: https://quay.io/repository/biocontainers/piranha/status
   :target: https://quay.io/repository/biocontainers/piranha
.. _`piranha/tags`: https://quay.io/repository/biocontainers/piranha?tab=tags


.. raw:: html

    <script>
        var package = "piranha";
        var versions = ["1.2.1","1.2.1","1.2.1","1.2.1","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piranha/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piranha/README.html
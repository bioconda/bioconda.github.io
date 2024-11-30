:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymummer'
.. highlight: bash

pymummer
========

.. conda:recipe:: pymummer
   :replaces_section_title:
   :noindex:

   Wrapper for MUMmer

   :homepage: https://github.com/sanger-pathogens/pymummer
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`pymummer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymummer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymummer/meta.yaml>`_

   


.. conda:package:: pymummer

   |downloads_pymummer| |docker_pymummer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11.0-1</code>,  <code>0.11.0-0</code>,  <code>0.10.3-2</code>,  <code>0.10.3-1</code>,  <code>0.10.3-0</code>,  <code>0.10.2-0</code>,  <code>0.10.1-2</code>,  <code>0.10.1-1</code>,  <code>0.10.1-0</code>,  </span></summary>
      

      ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.3-2``,  ``0.10.3-1``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-2``,  ``0.10.1-1``,  ``0.10.1-0``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.6.1-1``,  ``0.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends mummer: 
   :depends pyfastaq: ``>=3.10.0``
   :depends python: ``>=3``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pymummer

   and update with::

      mamba update pymummer

  To create a new environment, run::

      mamba create --name myenvname pymummer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pymummer:<tag>

   (see `pymummer/tags`_ for valid values for ``<tag>``)


.. |downloads_pymummer| image:: https://img.shields.io/conda/dn/bioconda/pymummer.svg?style=flat
   :target: https://anaconda.org/bioconda/pymummer
   :alt:   (downloads)
.. |docker_pymummer| image:: https://quay.io/repository/biocontainers/pymummer/status
   :target: https://quay.io/repository/biocontainers/pymummer
.. _`pymummer/tags`: https://quay.io/repository/biocontainers/pymummer?tab=tags


.. raw:: html

    <script>
        var package = "pymummer";
        var versions = ["0.11.0","0.11.0","0.10.3","0.10.3","0.10.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymummer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymummer/README.html
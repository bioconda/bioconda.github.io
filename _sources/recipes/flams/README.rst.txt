:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flams'
.. highlight: bash

flams
=====

.. conda:recipe:: flams
   :replaces_section_title:
   :noindex:

   Find Lysine Acylation \& other Modification Sites

   :homepage: https://github.com/hannelorelongin/FLAMS
   :license: MIT / MIT
   :recipe: /`flams <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flams>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flams/meta.yaml>`_

   


.. conda:package:: flams

   |downloads_flams| |docker_flams|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.6-0</code>,  <code>1.1.5-1</code>,  <code>1.1.5-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.0-0</code>,  <code>1.0.1-0</code>,  <code>0.0.8-0</code>,  </span></summary>
      

      ``1.1.6-0``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``0.0.8-0``,  ``0.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: ``1.4.4``
   :depends biopython: ``1.81``
   :depends blast: 
   :depends certifi: ``2023.5.7``
   :depends charset-normalizer: ``3.1.0``
   :depends idna: ``3.4``
   :depends numpy: ``1.24.3``
   :depends pandas: ``2.1.2``
   :depends python: ``>=3.10``
   :depends python-dateutil: ``2.8.2``
   :depends pytz: ``2023.3.post1``
   :depends requests: ``2.31.0``
   :depends six: ``1.16.0``
   :depends tzdata: ``2023c``
   :depends urllib3: ``2.0.2``
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

      mamba install flams

   and update with::

      mamba update flams

  To create a new environment, run::

      mamba create --name myenvname flams

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flams:<tag>

   (see `flams/tags`_ for valid values for ``<tag>``)


.. |downloads_flams| image:: https://img.shields.io/conda/dn/bioconda/flams.svg?style=flat
   :target: https://anaconda.org/bioconda/flams
   :alt:   (downloads)
.. |docker_flams| image:: https://quay.io/repository/biocontainers/flams/status
   :target: https://quay.io/repository/biocontainers/flams
.. _`flams/tags`: https://quay.io/repository/biocontainers/flams?tab=tags


.. raw:: html

    <script>
        var package = "flams";
        var versions = ["1.1.6","1.1.5","1.1.5","1.1.4","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flams/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flams/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pronto'
.. highlight: bash

pronto
======

.. conda:recipe:: pronto
   :replaces_section_title:
   :noindex:

   Python frontend to ontologies.

   :homepage: https://github.com/althonos/pronto
   :documentation: https://pronto.readthedocs.io/en/stable
   
   :license: MIT / MIT
   :recipe: /`pronto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pronto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pronto/meta.yaml>`_

   


.. conda:package:: pronto

   |downloads_pronto| |docker_pronto|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.0-0</code>,  <code>2.5.8-0</code>,  <code>2.5.7-0</code>,  <code>2.5.6-0</code>,  <code>2.5.5-0</code>,  <code>2.5.4-0</code>,  <code>2.5.3-0</code>,  <code>2.5.2-0</code>,  <code>2.5.1-0</code>,  </span></summary>
      

      ``2.6.0-0``,  ``2.5.8-0``,  ``2.5.7-0``,  ``2.5.6-0``,  ``2.5.5-0``,  ``2.5.4-0``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.7-0``,  ``2.4.6-0``,  ``2.4.5-0``,  ``2.4.4-0``,  ``2.4.3-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.2.4-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.2.0-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.2-1``,  ``0.10.2-0``,  ``0.3.3-2``,  ``0.3.3-1``,  ``0.3.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends chardet: ``>=5.0``
   :depends fastobo: ``>=0.12.2``
   :depends networkx: ``>=2.3``
   :depends python: ``>=3.7``
   :depends python-dateutil: ``>=2.8``
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

      mamba install pronto

   and update with::

      mamba update pronto

  To create a new environment, run::

      mamba create --name myenvname pronto

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pronto:<tag>

   (see `pronto/tags`_ for valid values for ``<tag>``)


.. |downloads_pronto| image:: https://img.shields.io/conda/dn/bioconda/pronto.svg?style=flat
   :target: https://anaconda.org/bioconda/pronto
   :alt:   (downloads)
.. |docker_pronto| image:: https://quay.io/repository/biocontainers/pronto/status
   :target: https://quay.io/repository/biocontainers/pronto
.. _`pronto/tags`: https://quay.io/repository/biocontainers/pronto?tab=tags


.. raw:: html

    <script>
        var package = "pronto";
        var versions = ["2.6.0","2.5.8","2.5.7","2.5.6","2.5.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pronto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pronto/README.html
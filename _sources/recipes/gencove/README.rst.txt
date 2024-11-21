:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gencove'
.. highlight: bash

gencove
=======

.. conda:recipe:: gencove
   :replaces_section_title:
   :noindex:

   Gencove is a high\-throughput\, cost\-effective platform for genome sequencing and analysis. This command\-line interface can be used to easily access the Gencove API.

   :homepage: https://docs.gencove.com
   :developer docs: https://github.com/gncv/gencove-cli
   :license: APACHE / Apache-2.0
   :recipe: /`gencove <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gencove>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gencove/meta.yaml>`_

   


.. conda:package:: gencove

   |downloads_gencove| |docker_gencove|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.24.2-0</code>,  <code>2.24.1-0</code>,  <code>2.24.0-0</code>,  <code>2.23.1-0</code>,  <code>2.23.0-0</code>,  <code>2.21.0-0</code>,  <code>2.20.2-0</code>,  <code>2.20.1-0</code>,  <code>2.20.0-0</code>,  </span></summary>
      

      ``2.24.2-0``,  ``2.24.1-0``,  ``2.24.0-0``,  ``2.23.1-0``,  ``2.23.0-0``,  ``2.21.0-0``,  ``2.20.2-0``,  ``2.20.1-0``,  ``2.20.0-0``,  ``2.19.0-0``,  ``2.18.5-0``,  ``2.18.3-0``,  ``2.18.2-0``,  ``2.18.1-0``,  ``2.18.0-0``,  ``2.17.1-0``,  ``2.8.1-0``,  ``2.8.0-0``,  ``2.7.3-0``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.0-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.7-0``,  ``2.4.6-0``,  ``2.4.5-0``,  ``2.4.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends backoff: ``<=2.2.1``
   :depends boto3: ``>=1.17.97``
   :depends click: ``>=7.0``
   :depends click-default-group: ``>=1.2.4``
   :depends progressbar2: ``3.55.0``
   :depends pydantic: ``1.10.13``
   :depends python: ``>=3.7``
   :depends python-dateutil: ``>=2.2.0``
   :depends requests: ``>=2.19.1``
   :depends sh: ``>=1.14.3``
   :depends six: ``>=1.5``
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

      mamba install gencove

   and update with::

      mamba update gencove

  To create a new environment, run::

      mamba create --name myenvname gencove

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gencove:<tag>

   (see `gencove/tags`_ for valid values for ``<tag>``)


.. |downloads_gencove| image:: https://img.shields.io/conda/dn/bioconda/gencove.svg?style=flat
   :target: https://anaconda.org/bioconda/gencove
   :alt:   (downloads)
.. |docker_gencove| image:: https://quay.io/repository/biocontainers/gencove/status
   :target: https://quay.io/repository/biocontainers/gencove
.. _`gencove/tags`: https://quay.io/repository/biocontainers/gencove?tab=tags


.. raw:: html

    <script>
        var package = "gencove";
        var versions = ["2.24.2","2.24.1","2.24.0","2.23.1","2.23.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gencove/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gencove/README.html
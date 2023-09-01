:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biophi'
.. highlight: bash

biophi
======

.. conda:recipe:: biophi
   :replaces_section_title:
   :noindex:

   BioPhi open\-source antibody design platform

   :homepage: https://github.com/Merck/BioPhi
   :license: MIT / MIT
   :recipe: /`biophi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biophi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biophi/meta.yaml>`_

   


.. conda:package:: biophi

   |downloads_biophi| |docker_biophi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.9-1</code>,  <code>1.0.9-0</code>,  <code>1.0.8-1</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.6-0</code>,  <code>1.0.5-0</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  </span></summary>
      

      ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends abnumber: ``0.3.2``
   :depends anarci: ``2020.04.23``
   :depends celery: 
   :depends click: ``>=7``
   :depends flask: ``>=2.1``
   :depends hmmer: ``>=3.1``
   :depends humanize: 
   :depends python: ``>=3.8``
   :depends redis-py: 
   :depends requests: 
   :depends sapiens: ``>=1.0.4``
   :depends sqlalchemy: ``<2``
   :depends tqdm: 
   :depends xlsxwriter: 
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

      mamba install biophi

   and update with::

      mamba update biophi

  To create a new environment, run::

      mamba create --name myenvname biophi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biophi:<tag>

   (see `biophi/tags`_ for valid values for ``<tag>``)


.. |downloads_biophi| image:: https://img.shields.io/conda/dn/bioconda/biophi.svg?style=flat
   :target: https://anaconda.org/bioconda/biophi
   :alt:   (downloads)
.. |docker_biophi| image:: https://quay.io/repository/biocontainers/biophi/status
   :target: https://quay.io/repository/biocontainers/biophi
.. _`biophi/tags`: https://quay.io/repository/biocontainers/biophi?tab=tags


.. raw:: html

    <script>
        var package = "biophi";
        var versions = ["1.0.9","1.0.9","1.0.8","1.0.8","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biophi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biophi/README.html
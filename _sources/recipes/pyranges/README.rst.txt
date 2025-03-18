:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyranges'
.. highlight: bash

pyranges
========

.. conda:recipe:: pyranges
   :replaces_section_title:
   :noindex:

   Performant Pythonic GenomicRanges.

   :homepage: https://github.com/endrebak/pyranges
   :documentation: https://pyranges.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`pyranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyranges/meta.yaml>`_
   :links: biotools: :biotools:`PyRanges`, doi: :doi:`10.1093/bioinformatics/btz615`

   


.. conda:package:: pyranges

   |downloads_pyranges| |docker_pyranges|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.4-0</code>,  <code>0.1.2-1</code>,  <code>0.1.2-0</code>,  <code>0.0.129-0</code>,  <code>0.0.128-0</code>,  <code>0.0.127-0</code>,  <code>0.0.125-0</code>,  <code>0.0.124-0</code>,  <code>0.0.120-0</code>,  </span></summary>
      

      ``0.1.4-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.0.129-0``,  ``0.0.128-0``,  ``0.0.127-0``,  ``0.0.125-0``,  ``0.0.124-0``,  ``0.0.120-0``,  ``0.0.117-0``,  ``0.0.115-0``,  ``0.0.113-0``,  ``0.0.112-0``,  ``0.0.111-0``,  ``0.0.110-0``,  ``0.0.109-0``,  ``0.0.108-0``,  ``0.0.104-0``,  ``0.0.103-0``,  ``0.0.101-0``,  ``0.0.100-0``,  ``0.0.99-0``,  ``0.0.98-0``,  ``0.0.97-0``,  ``0.0.96-0``,  ``0.0.95-0``,  ``0.0.94-0``,  ``0.0.93-0``,  ``0.0.92-0``,  ``0.0.89-0``,  ``0.0.88-0``,  ``0.0.87-0``,  ``0.0.86-0``,  ``0.0.85-0``,  ``0.0.84-0``,  ``0.0.83-0``,  ``0.0.81-0``,  ``0.0.80-0``,  ``0.0.79-1``,  ``0.0.79-0``,  ``0.0.78-0``,  ``0.0.77-0``,  ``0.0.76-0``,  ``0.0.75-0``,  ``0.0.74-0``,  ``0.0.73-0``,  ``0.0.72-0``,  ``0.0.71-0``,  ``0.0.70-0``,  ``0.0.69-0``,  ``0.0.67-0``,  ``0.0.66-0``,  ``0.0.65-0``,  ``0.0.64-0``,  ``0.0.63-0``,  ``0.0.62-0``,  ``0.0.61-0``,  ``0.0.60-0``,  ``0.0.59-0``,  ``0.0.58-0``,  ``0.0.57-0``,  ``0.0.56-0``,  ``0.0.55-0``,  ``0.0.54-0``,  ``0.0.53-0``,  ``0.0.52-0``,  ``0.0.51-1``,  ``0.0.51-0``,  ``0.0.50-0``,  ``0.0.49-0``,  ``0.0.48-0``,  ``0.0.45-0``,  ``0.0.44-0``,  ``0.0.43-0``,  ``0.0.42-0``,  ``0.0.41-0``,  ``0.0.40-0``,  ``0.0.39-0``

      
      .. raw:: html

         </details>
      

   
   :depends importlib-metadata: 
   :depends natsort: 
   :depends ncls: ``>=0.0.63``
   :depends pandas: 
   :depends python: ``>=3``
   :depends sorted_nearest: ``>=0.0.33``
   :depends tabulate: 
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

      mamba install pyranges

   and update with::

      mamba update pyranges

  To create a new environment, run::

      mamba create --name myenvname pyranges

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyranges:<tag>

   (see `pyranges/tags`_ for valid values for ``<tag>``)


.. |downloads_pyranges| image:: https://img.shields.io/conda/dn/bioconda/pyranges.svg?style=flat
   :target: https://anaconda.org/bioconda/pyranges
   :alt:   (downloads)
.. |docker_pyranges| image:: https://quay.io/repository/biocontainers/pyranges/status
   :target: https://quay.io/repository/biocontainers/pyranges
.. _`pyranges/tags`: https://quay.io/repository/biocontainers/pyranges?tab=tags


.. raw:: html

    <script>
        var package = "pyranges";
        var versions = ["0.1.4","0.1.2","0.1.2","0.0.129","0.0.128"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyranges/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-tripal'
.. highlight: bash

python-tripal
=============

.. conda:recipe:: python-tripal
   :replaces_section_title:
   :noindex:

   Tripal API library

   :homepage: https://github.com/galaxy-genome-annotation/python-tripal
   :license: MIT / MIT License
   :recipe: /`python-tripal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-tripal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-tripal/meta.yaml>`_
   :links: biotools: :biotools:`tripal`

   


.. conda:package:: python-tripal

   |downloads_python-tripal| |docker_python-tripal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.1-0</code>,  <code>3.2-0</code>,  <code>3.1.1-0</code>,  <code>3.0-1</code>,  <code>3.0-0</code>,  <code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  </span></summary>
      

      ``3.2.1-0``,  ``3.2-0``,  ``3.1.1-0``,  ``3.0-1``,  ``3.0-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.8-0``,  ``1.7-0``,  ``1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends future: 
   :depends python: 
   :depends pyyaml: 
   :depends requests: ``>=2.4.3``
   :depends wrapt: 
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

      mamba install python-tripal

   and update with::

      mamba update python-tripal

  To create a new environment, run::

      mamba create --name myenvname python-tripal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-tripal:<tag>

   (see `python-tripal/tags`_ for valid values for ``<tag>``)


.. |downloads_python-tripal| image:: https://img.shields.io/conda/dn/bioconda/python-tripal.svg?style=flat
   :target: https://anaconda.org/bioconda/python-tripal
   :alt:   (downloads)
.. |docker_python-tripal| image:: https://quay.io/repository/biocontainers/python-tripal/status
   :target: https://quay.io/repository/biocontainers/python-tripal
.. _`python-tripal/tags`: https://quay.io/repository/biocontainers/python-tripal?tab=tags


.. raw:: html

    <script>
        var package = "python-tripal";
        var versions = ["3.2.1","3.2","3.1.1","3.0","3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-tripal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-tripal/README.html
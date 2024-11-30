:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyomero-upload'
.. highlight: bash

pyomero-upload
==============

.. conda:recipe:: pyomero-upload
   :replaces_section_title:
   :noindex:

   Client library offering helper methods to upload data to an OMERO server.

   :homepage: http://www.synthsys.ed.ac.uk/
   :license: MIT
   :recipe: /`pyomero-upload <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyomero-upload>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyomero-upload/meta.yaml>`_

   


.. conda:package:: pyomero-upload

   |downloads_pyomero-upload| |docker_pyomero-upload|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.6.2_2.2.0-0</code>,  <code>5.6.2_2.1.0-0</code>,  <code>5.6.2_2.0.0-0</code>,  <code>5.4.10_1.3.0-0</code>,  <code>5.4.10_1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0-3</code>,  <code>1.0.0-2</code>,  <code>1.0.0-1</code>,  </span></summary>
      

      ``5.6.2_2.2.0-0``,  ``5.6.2_2.1.0-0``,  ``5.6.2_2.0.0-0``,  ``5.4.10_1.3.0-0``,  ``5.4.10_1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends enum34: 
   :depends filetype: 
   :depends future: 
   :depends numpy: 
   :depends pandas: 
   :depends pillow: 
   :depends python: ``>=3.6,<3.8``
   :depends python-omero: ``5.6.2.*``
   :depends pyyaml: 
   :depends requests: 
   :depends scipy: 
   :depends zeroc-ice: ``3.6.*``
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

      mamba install pyomero-upload

   and update with::

      mamba update pyomero-upload

  To create a new environment, run::

      mamba create --name myenvname pyomero-upload

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyomero-upload:<tag>

   (see `pyomero-upload/tags`_ for valid values for ``<tag>``)


.. |downloads_pyomero-upload| image:: https://img.shields.io/conda/dn/bioconda/pyomero-upload.svg?style=flat
   :target: https://anaconda.org/bioconda/pyomero-upload
   :alt:   (downloads)
.. |docker_pyomero-upload| image:: https://quay.io/repository/biocontainers/pyomero-upload/status
   :target: https://quay.io/repository/biocontainers/pyomero-upload
.. _`pyomero-upload/tags`: https://quay.io/repository/biocontainers/pyomero-upload?tab=tags


.. raw:: html

    <script>
        var package = "pyomero-upload";
        var versions = ["5.6.2_2.2.0","5.6.2_2.1.0","5.6.2_2.0.0","5.4.10_1.3.0","5.4.10_1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyomero-upload/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyomero-upload/README.html
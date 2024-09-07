:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dxpy'
.. highlight: bash

dxpy
====

.. conda:recipe:: dxpy
   :replaces_section_title:
   :noindex:

   DNAnexus Platform API bindings for Python

   :homepage: https://github.com/dnanexus/dx-toolkit
   :documentation: http://autodoc.dnanexus.com/bindings/python/current/
   
   :license: Apache / Apache-2.0
   :recipe: /`dxpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dxpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dxpy/meta.yaml>`_

   


.. conda:package:: dxpy

   |downloads_dxpy| |docker_dxpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.382.0-0</code>,  <code>0.381.0-0</code>,  <code>0.380.0-0</code>,  <code>0.379.0-0</code>,  <code>0.378.0-0</code>,  <code>0.377.0-0</code>,  <code>0.376.0-0</code>,  <code>0.374.0-0</code>,  <code>0.373.0-0</code>,  </span></summary>
      

      ``0.382.0-0``,  ``0.381.0-0``,  ``0.380.0-0``,  ``0.379.0-0``,  ``0.378.0-0``,  ``0.377.0-0``,  ``0.376.0-0``,  ``0.374.0-0``,  ``0.373.0-0``,  ``0.372.0-0``,  ``0.371.0-0``,  ``0.370.2-0``,  ``0.369.1-0``,  ``0.369.0-0``,  ``0.368.1-0``,  ``0.367.0-0``,  ``0.366.0-0``,  ``0.365.0-0``,  ``0.364.0-0``,  ``0.363.0-0``,  ``0.362.0-0``,  ``0.361.0-0``,  ``0.359.1-0``,  ``0.359.0-0``,  ``0.358.0-0``,  ``0.357.0-0``,  ``0.356.0-0``,  ``0.355.0-0``,  ``0.354.0-0``,  ``0.353.1-0``,  ``0.352.1-0``,  ``0.350.1-0``,  ``0.349.1-0``,  ``0.347.0-0``,  ``0.346.0-0``,  ``0.345.0-0``,  ``0.344.0-0``,  ``0.343.0-0``,  ``0.342.1-0``,  ``0.331.0-0``,  ``0.330.0-0``,  ``0.329.0-0``,  ``0.328.0-0``,  ``0.327.1-0``,  ``0.326.1-1``,  ``0.326.1-0``,  ``0.325.1-1``,  ``0.325.1-0``,  ``0.324.1-1``,  ``0.324.1-0``,  ``0.323.0-1``,  ``0.323.0-0``,  ``0.322.1-1``,  ``0.322.1-0``,  ``0.321.0-1``,  ``0.321.0-0``,  ``0.320.0-1``,  ``0.320.0-0``,  ``0.319.2-1``,  ``0.319.2-0``,  ``0.318.1-1``,  ``0.318.1-0``,  ``0.318.0-0``,  ``0.317.0-0``,  ``0.316.0-0``,  ``0.315.0-0``,  ``0.314.0-0``,  ``0.313.0-0``,  ``0.312.0-0``,  ``0.311.0-0``,  ``0.310.0-0``,  ``0.309.0-0``,  ``0.308.0-0``,  ``0.307.0-0``,  ``0.306.0-0``,  ``0.305.0-0``,  ``0.304.1-0``,  ``0.303.1-0``,  ``0.302.1-0``,  ``0.301.1-0``,  ``0.300.1-0``,  ``0.299.0-0``,  ``0.298.1-0``,  ``0.297.1-0``,  ``0.296.0-0``,  ``0.295.1-0``,  ``0.294.0-0``,  ``0.293.0-0``,  ``0.292.0-0``,  ``0.291.1-0``,  ``0.290.1-0``,  ``0.289.1-0``,  ``0.288.0-0``,  ``0.287.0-0``,  ``0.286.1-0``,  ``0.285.1-0``,  ``0.285.0-0``,  ``0.284.0-0``,  ``0.283.0-0``,  ``0.282.0-0``,  ``0.273.0-0``,  ``0.261.1-0``,  ``0.257.3-0``,  ``0.254.0-1``,  ``0.254.0-0``,  ``0.250.2-0``,  ``0.247.0-0``,  ``0.225.0-0``,  ``0.223.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends argcomplete: ``>=1.9.4``
   :depends certifi: 
   :depends cryptography: ``>=3.4.2,<37``
   :depends pandas: ``>=1.3.5``
   :depends psutil: ``>=3.3.0``
   :depends python: 
   :depends python-dateutil: ``>=2.5``
   :depends requests: ``>=2.8.0,<2.27.1``
   :depends urllib3: ``>=1.25,<2.2``
   :depends websocket-client: ``0.54.0``
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

      mamba install dxpy

   and update with::

      mamba update dxpy

  To create a new environment, run::

      mamba create --name myenvname dxpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dxpy:<tag>

   (see `dxpy/tags`_ for valid values for ``<tag>``)


.. |downloads_dxpy| image:: https://img.shields.io/conda/dn/bioconda/dxpy.svg?style=flat
   :target: https://anaconda.org/bioconda/dxpy
   :alt:   (downloads)
.. |docker_dxpy| image:: https://quay.io/repository/biocontainers/dxpy/status
   :target: https://quay.io/repository/biocontainers/dxpy
.. _`dxpy/tags`: https://quay.io/repository/biocontainers/dxpy?tab=tags


.. raw:: html

    <script>
        var package = "dxpy";
        var versions = ["0.382.0","0.381.0","0.380.0","0.379.0","0.378.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dxpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dxpy/README.html
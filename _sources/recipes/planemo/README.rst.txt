:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'planemo'
.. highlight: bash

planemo
=======

.. conda:recipe:: planemo
   :replaces_section_title:
   :noindex:

   Command\-line utilities to assist in building tools for the Galaxy project \(http\:\/\/galaxyproject.org\/\).

   :homepage: https://pypi.org/project/planemo/
   :documentation: https://planemo.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/galaxyproject/planemo
   :license: MIT / MIT
   :recipe: /`planemo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/planemo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/planemo/meta.yaml>`_

   


.. conda:package:: planemo

   |downloads_planemo| |docker_planemo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.75.12-0</code>,  <code>0.75.11-0</code>,  <code>0.75.10-0</code>,  <code>0.75.9-0</code>,  <code>0.75.3-0</code>,  <code>0.74.11-0</code>,  <code>0.74.10-0</code>,  <code>0.74.9-0</code>,  <code>0.74.8-0</code>,  </span></summary>
      

      ``0.75.12-0``,  ``0.75.11-0``,  ``0.75.10-0``,  ``0.75.9-0``,  ``0.75.3-0``,  ``0.74.11-0``,  ``0.74.10-0``,  ``0.74.9-0``,  ``0.74.8-0``,  ``0.74.7-0``,  ``0.74.6-0``,  ``0.74.5-0``,  ``0.74.4-1``,  ``0.74.4-0``,  ``0.74.3-0``,  ``0.74.2-0``,  ``0.74.1-0``,  ``0.74.0-0``,  ``0.73.0-0``,  ``0.72.0-0``,  ``0.70.0-1``,  ``0.70.0-0``,  ``0.62.1-2``,  ``0.62.1-1``,  ``0.62.1-0``,  ``0.61.0-0``,  ``0.60.0-0``,  ``0.59.0-0``,  ``0.57.1-1``,  ``0.57.1-0``,  ``0.57.0-0``,  ``0.56.0-0``,  ``0.55.0-1``,  ``0.55.0-0``,  ``0.54.0-1``,  ``0.48.0-1``,  ``0.48.0-0``,  ``0.46.1-0``,  ``0.40.1-0``,  ``0.38.1-1``,  ``0.34.1-2``,  ``0.34.1-1``,  ``0.34.1-0``,  ``0.33.2-0``,  ``0.29.1-0``,  ``0.23.0-1``,  ``0.23.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends allure-python-commons: 
   :depends beautifulsoup4: 
   :depends bioblend: ``>=1.0.0``
   :depends click: 
   :depends cwltool: ``>=1.0.20191225192155``
   :depends docutils: 
   :depends ephemeris: ``>=0.10.3``
   :depends galaxy-containers: 
   :depends galaxy-tool-util: ``>=23.0,<23.1``
   :depends galaxy-util: ``>=23.0,<23.1``
   :depends glob2: 
   :depends gxformat2: ``>=0.14.0``
   :depends h5py: 
   :depends jinja2: 
   :depends lxml: 
   :depends oyaml: 
   :depends pathvalidate: 
   :depends python: ``>=3.7``
   :depends pyyaml: 
   :depends six: ``>=1.7.0``
   :depends tabulate: 
   :depends virtualenv: 
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

      mamba install planemo

   and update with::

      mamba update planemo

  To create a new environment, run::

      mamba create --name myenvname planemo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/planemo:<tag>

   (see `planemo/tags`_ for valid values for ``<tag>``)


.. |downloads_planemo| image:: https://img.shields.io/conda/dn/bioconda/planemo.svg?style=flat
   :target: https://anaconda.org/bioconda/planemo
   :alt:   (downloads)
.. |docker_planemo| image:: https://quay.io/repository/biocontainers/planemo/status
   :target: https://quay.io/repository/biocontainers/planemo
.. _`planemo/tags`: https://quay.io/repository/biocontainers/planemo?tab=tags


.. raw:: html

    <script>
        var package = "planemo";
        var versions = ["0.75.12","0.75.11","0.75.10","0.75.9","0.75.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/planemo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/planemo/README.html
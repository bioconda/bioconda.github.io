:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bigmag'
.. highlight: bash

bigmag
======

.. conda:recipe:: bigmag
   :replaces_section_title:
   :noindex:

   BIgMAG\: dashboard for extracting insights from MAG quality metrics

   :homepage: https://github.com/jeffe107/BIgMAG
   :license: MIT / MIT
   :recipe: /`bigmag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigmag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigmag/meta.yaml>`_
   :links: doi: :doi:`10.12688/f1000research.152290.2`

   


.. conda:package:: bigmag

   |downloads_bigmag| |docker_bigmag|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends dash: 
   :depends dash-bio: 
   :depends dash-bootstrap-components: 
   :depends dash-daq: 
   :depends gunicorn: 
   :depends numpy: ``<2``
   :depends pandas: 
   :depends pingouin: 
   :depends plotly: 
   :depends python: ``>=3.9,<3.12``
   :depends scikit-posthocs: 
   :depends scipy: 
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

      mamba install bigmag

   and update with::

      mamba update bigmag

  To create a new environment, run::

      mamba create --name myenvname bigmag

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bigmag:<tag>

   (see `bigmag/tags`_ for valid values for ``<tag>``)


.. |downloads_bigmag| image:: https://img.shields.io/conda/dn/bioconda/bigmag.svg?style=flat
   :target: https://anaconda.org/bioconda/bigmag
   :alt:   (downloads)
.. |docker_bigmag| image:: https://quay.io/repository/biocontainers/bigmag/status
   :target: https://quay.io/repository/biocontainers/bigmag
.. _`bigmag/tags`: https://quay.io/repository/biocontainers/bigmag?tab=tags


.. raw:: html

    <script>
        var package = "bigmag";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bigmag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bigmag/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'massdash'
.. highlight: bash

massdash
========

.. conda:recipe:: massdash
   :replaces_section_title:
   :noindex:

   MassDash is a streamlined DIA mass spec visualization\, analysis\, optimization\, and rapid prototyping.

   :homepage: https://github.com/Roestlab/massdash
   :license: BSD / BSD
   :recipe: /`massdash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/massdash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/massdash/meta.yaml>`_

   


.. conda:package:: massdash

   |downloads_massdash| |docker_massdash|

   :versions:
      
      

      ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.6-0``,  ``0.0.5-0``

      

   
   :depends bokeh: ``2.4.3``
   :depends click: 
   :depends joblib: 
   :depends matplotlib-base: 
   :depends matplotlib-venn: 
   :depends numpy: ``>=1.9.0``
   :depends pandas: ``>=0.17``
   :depends plotly: 
   :depends psutil: 
   :depends pyopenms: 
   :depends python: 
   :depends scipy: 
   :depends streamlit: 
   :depends tqdm: 
   :depends upsetplot: 
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

      mamba install massdash

   and update with::

      mamba update massdash

  To create a new environment, run::

      mamba create --name myenvname massdash

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/massdash:<tag>

   (see `massdash/tags`_ for valid values for ``<tag>``)


.. |downloads_massdash| image:: https://img.shields.io/conda/dn/bioconda/massdash.svg?style=flat
   :target: https://anaconda.org/bioconda/massdash
   :alt:   (downloads)
.. |docker_massdash| image:: https://quay.io/repository/biocontainers/massdash/status
   :target: https://quay.io/repository/biocontainers/massdash
.. _`massdash/tags`: https://quay.io/repository/biocontainers/massdash?tab=tags


.. raw:: html

    <script>
        var package = "massdash";
        var versions = ["0.0.9","0.0.8","0.0.6","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/massdash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/massdash/README.html
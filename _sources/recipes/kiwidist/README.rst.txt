:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kiwidist'
.. highlight: bash

kiwidist
========

.. conda:recipe:: kiwidist
   :replaces_section_title:
   :noindex:

   Combining gene\-set analysis with network properties

   :homepage: https://pypi.org/project/KiwiDist/
   :license: MIT
   :recipe: /`kiwidist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kiwidist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kiwidist/meta.yaml>`_

   


.. conda:package:: kiwidist

   |downloads_kiwidist| |docker_kiwidist|

   :versions:
      
      

      ``0.3.6-3``,  ``0.3.6-2``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``

      

   
   :depends on matplotlib: ``>=1.3.1,<=1.4.3``
   :depends on mygene: ``>=2.1.0``
   :depends on networkx: ``>=1.8.1``
   :depends on numpy: ``>=1.8.0``
   :depends on pandas: ``>=0.13.1``
   :depends on python: ``<3``
   :depends on scipy: ``>=0.13.3,<=0.16.0``
   :depends on six: ``>=1.5``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install kiwidist

to add into an existing workspace instead, run::

    pixi add kiwidist

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kiwidist

Alternatively, to install into a new environment, run::

    conda create -n envname kiwidist

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kiwidist:<tag>

(see `kiwidist/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kiwidist| image:: https://img.shields.io/conda/dn/bioconda/kiwidist.svg?style=flat
   :target: https://anaconda.org/bioconda/kiwidist
   :alt:   (downloads)
.. |docker_kiwidist| image:: https://quay.io/repository/biocontainers/kiwidist/status
   :target: https://quay.io/repository/biocontainers/kiwidist
.. _`kiwidist/tags`: https://quay.io/repository/biocontainers/kiwidist?tab=tags


.. raw:: html

    <script>
        var package = "kiwidist";
        var versions = ["0.3.6","0.3.6","0.3.6","0.3.5","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kiwidist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kiwidist/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'breakfast'
.. highlight: bash

breakfast
=========

.. conda:recipe:: breakfast
   :replaces_section_title:
   :noindex:

   breakfast\: fast putative outbreak cluster and infection chain detection using SNPs.

   :homepage: https://github.com/rki-mf1/breakfast
   :license: MIT / MIT
   :recipe: /`breakfast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakfast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakfast/meta.yaml>`_

   


.. conda:package:: breakfast

   |downloads_breakfast| |docker_breakfast|

   :versions:
      
      

      ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.3-0``,  ``0.3.2-0``

      

   
   :depends on click: ``>=8.1.7,<9.0.0``
   :depends on networkx: ``>=3.4.2,<4.0.0``
   :depends on numpy: ``>=2.1.3,<3.0.0``
   :depends on pandas: ``>=2.2.3,<3.0.0``
   :depends on python: ``>=3.9,<3.11``
   :depends on scikit-learn: ``>=1.5.2,<2.0.0``
   :depends on scipy: ``>=1.14.1,<2.0.0``

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

    pixi global install breakfast

to add into an existing workspace instead, run::

    pixi add breakfast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install breakfast

Alternatively, to install into a new environment, run::

    conda create -n envname breakfast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/breakfast:<tag>

(see `breakfast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_breakfast| image:: https://img.shields.io/conda/dn/bioconda/breakfast.svg?style=flat
   :target: https://anaconda.org/bioconda/breakfast
   :alt:   (downloads)
.. |docker_breakfast| image:: https://quay.io/repository/biocontainers/breakfast/status
   :target: https://quay.io/repository/biocontainers/breakfast
.. _`breakfast/tags`: https://quay.io/repository/biocontainers/breakfast?tab=tags


.. raw:: html

    <script>
        var package = "breakfast";
        var versions = ["0.4.6","0.4.5","0.4.3","0.4.2","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/breakfast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/breakfast/README.html
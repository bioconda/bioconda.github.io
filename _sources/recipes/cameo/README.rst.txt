:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cameo'
.. highlight: bash

cameo
=====

.. conda:recipe:: cameo
   :replaces_section_title:
   :noindex:

   cameo \- computer aided metabolic engineering \& optimization

   :homepage: http://cameo.bio
   :license: APACHE / Apache Software
   :recipe: /`cameo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cameo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cameo/meta.yaml>`_

   


.. conda:package:: cameo

   |downloads_cameo| |docker_cameo|

   :versions:
      
      

      ``0.13.6-0``,  ``0.13.5-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.15-0``

      

   
   :depends on blessings: ``>=1.5.1``
   :depends on click: ``>=6.7``
   :depends on cobra: ``>=0.11.1``
   :depends on escher: ``>=1.1.2``
   :depends on future: ``>=0.15.2``
   :depends on gnomic: ``>=1.0.1``
   :depends on inspyred: ``>=1.0``
   :depends on iprogress: ``>=0.4``
   :depends on lazy-object-proxy: ``>=1.2.0``
   :depends on networkx: ``>=1.9.1``
   :depends on numexpr: ``>=2.4``
   :depends on numpy: ``>=1.9.1``
   :depends on openpyxl: ``>=2.4.5``
   :depends on optlang: ``>=1.2.1``
   :depends on ordered-set: ``>=1.2``
   :depends on palettable: ``>=2.1.1``
   :depends on pandas: ``>=0.24.0``
   :depends on python: ``>=3.6``
   :depends on requests: ``>=2.10.0``
   :depends on scipy: ``>=0.14.0``
   :depends on six: ``>=1.9.0``

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

    pixi global install cameo

to add into an existing workspace instead, run::

    pixi add cameo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cameo

Alternatively, to install into a new environment, run::

    conda create -n envname cameo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cameo:<tag>

(see `cameo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cameo| image:: https://img.shields.io/conda/dn/bioconda/cameo.svg?style=flat
   :target: https://anaconda.org/bioconda/cameo
   :alt:   (downloads)
.. |docker_cameo| image:: https://quay.io/repository/biocontainers/cameo/status
   :target: https://quay.io/repository/biocontainers/cameo
.. _`cameo/tags`: https://quay.io/repository/biocontainers/cameo?tab=tags


.. raw:: html

    <script>
        var package = "cameo";
        var versions = ["0.13.6","0.13.5","0.13.0","0.12.0","0.11.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cameo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cameo/README.html
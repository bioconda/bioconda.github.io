:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stamp'
.. highlight: bash

stamp
=====

.. conda:recipe:: stamp
   :replaces_section_title:
   :noindex:

   A graphical software package for analyzing taxonomic and functional profiles.

   :homepage: http://pypi.python.org/pypi/stamp/
   :license: GPL / GPL-3.0
   :recipe: /`stamp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stamp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stamp/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu494`

   


.. conda:package:: stamp

   |downloads_stamp| |docker_stamp|

   :versions:
      
      

      ``2.1.3-2``,  ``2.1.3-1``,  ``2.1.3-0``

      

   
   :depends on biom-format: ``>=2.0.1``
   :depends on matplotlib: ``>=1.4.2``
   :depends on numpy: ``>=1.9.1``
   :depends on pyqi: ``>=0.3.2``
   :depends on pyqt: ``>=4.11.4,<4.12.0a0``
   :depends on python: ``<3``
   :depends on scipy: ``>=0.15.1``
   :depends on six: ``>=1.3``

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

    pixi global install stamp

to add into an existing workspace instead, run::

    pixi add stamp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install stamp

Alternatively, to install into a new environment, run::

    conda create -n envname stamp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/stamp:<tag>

(see `stamp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_stamp| image:: https://img.shields.io/conda/dn/bioconda/stamp.svg?style=flat
   :target: https://anaconda.org/bioconda/stamp
   :alt:   (downloads)
.. |docker_stamp| image:: https://quay.io/repository/biocontainers/stamp/status
   :target: https://quay.io/repository/biocontainers/stamp
.. _`stamp/tags`: https://quay.io/repository/biocontainers/stamp?tab=tags


.. raw:: html

    <script>
        var package = "stamp";
        var versions = ["2.1.3","2.1.3","2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stamp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stamp/README.html
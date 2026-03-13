:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'macsyfinder'
.. highlight: bash

macsyfinder
===========

.. conda:recipe:: macsyfinder
   :replaces_section_title:
   :noindex:

   MacSyFinder\: Detection of macromolecular systems in protein datasets using systems modelling and similarity search

   :homepage: https://github.com/gem-pasteur/macsyfinder
   :documentation: https://macsyfinder.readthedocs.io/en/latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`macsyfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macsyfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macsyfinder/meta.yaml>`_
   :links: biotools: :biotools:`macsyfinder`, doi: :doi:`10.24072/pcjournal.250`

   


.. conda:package:: macsyfinder

   |downloads_macsyfinder| |docker_macsyfinder|

   :versions:
      
      

      ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.4-1``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1-0``,  ``2.0-0``

      

   
   :depends on git: ``>1.7.0``
   :depends on hmmer: ``>=3.1b2,<=3.4``
   :depends on macsylib: ``>=1.0.4,<1.5``
   :depends on python: ``>=3.10``

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

    pixi global install macsyfinder

to add into an existing workspace instead, run::

    pixi add macsyfinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install macsyfinder

Alternatively, to install into a new environment, run::

    conda create -n envname macsyfinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/macsyfinder:<tag>

(see `macsyfinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_macsyfinder| image:: https://img.shields.io/conda/dn/bioconda/macsyfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/macsyfinder
   :alt:   (downloads)
.. |docker_macsyfinder| image:: https://quay.io/repository/biocontainers/macsyfinder/status
   :target: https://quay.io/repository/biocontainers/macsyfinder
.. _`macsyfinder/tags`: https://quay.io/repository/biocontainers/macsyfinder?tab=tags


.. raw:: html

    <script>
        var package = "macsyfinder";
        var versions = ["2.1.6","2.1.5","2.1.4","2.1.4","2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/macsyfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/macsyfinder/README.html
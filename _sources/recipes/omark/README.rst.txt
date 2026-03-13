:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'omark'
.. highlight: bash

omark
=====

.. conda:recipe:: omark
   :replaces_section_title:
   :noindex:

   OMArk \- Proteome quality assesment based on OMAmer placements

   :homepage: https://github.com/DessimozLab/omark
   :license: LGPL-3.0
   :recipe: /`omark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/omark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/omark/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.11.25.517970`

   


.. conda:package:: omark

   |downloads_omark| |docker_omark|

   :versions:
      
      

      ``0.4.1-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``

      

   
   :depends on biopython: 
   :depends on ete3: 
   :depends on jinja2: 
   :depends on libsqlite: ``<=3.40.0``
   :depends on matplotlib-base: 
   :depends on omamer: ``>=2.0.0``
   :depends on python: 

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

    pixi global install omark

to add into an existing workspace instead, run::

    pixi add omark

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install omark

Alternatively, to install into a new environment, run::

    conda create -n envname omark

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/omark:<tag>

(see `omark/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_omark| image:: https://img.shields.io/conda/dn/bioconda/omark.svg?style=flat
   :target: https://anaconda.org/bioconda/omark
   :alt:   (downloads)
.. |docker_omark| image:: https://quay.io/repository/biocontainers/omark/status
   :target: https://quay.io/repository/biocontainers/omark
.. _`omark/tags`: https://quay.io/repository/biocontainers/omark?tab=tags


.. raw:: html

    <script>
        var package = "omark";
        var versions = ["0.4.1","0.3.1","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/omark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/omark/README.html
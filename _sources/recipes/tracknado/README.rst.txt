:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tracknado'
.. highlight: bash

tracknado
=========

.. conda:recipe:: tracknado
   :replaces_section_title:
   :noindex:

   CLI library to generate UCSC trackhubs from sequencing data

   :homepage: https://pypi.org/project/tracknado/
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`tracknado <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracknado>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracknado/meta.yaml>`_

   


.. conda:package:: tracknado

   |downloads_tracknado| |docker_tracknado|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.4-0``,  ``0.2.3-0``

      

   
   :depends on click: 
   :depends on cookiecutter: 
   :depends on loguru: 
   :depends on pandas: 
   :depends on pandera: ``>=0.18``
   :depends on pillow: 
   :depends on pydantic: ``>=2.0``
   :depends on python: ``>=3.7``
   :depends on seaborn: 
   :depends on trackhub: 
   :depends on typer: 

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

    pixi global install tracknado

to add into an existing workspace instead, run::

    pixi add tracknado

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tracknado

Alternatively, to install into a new environment, run::

    conda create -n envname tracknado

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tracknado:<tag>

(see `tracknado/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tracknado| image:: https://img.shields.io/conda/dn/bioconda/tracknado.svg?style=flat
   :target: https://anaconda.org/bioconda/tracknado
   :alt:   (downloads)
.. |docker_tracknado| image:: https://quay.io/repository/biocontainers/tracknado/status
   :target: https://quay.io/repository/biocontainers/tracknado
.. _`tracknado/tags`: https://quay.io/repository/biocontainers/tracknado?tab=tags


.. raw:: html

    <script>
        var package = "tracknado";
        var versions = ["0.3.1","0.3.0","0.2.4","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tracknado/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tracknado/README.html
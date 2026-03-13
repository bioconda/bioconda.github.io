:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'segzoo'
.. highlight: bash

segzoo
======

.. conda:recipe:: segzoo
   :replaces_section_title:
   :noindex:

   System for turnkey analysis of semi\-automated genome annotations

   :homepage: https://github.com/hoffmangroup/segzoo
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`segzoo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segzoo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segzoo/meta.yaml>`_

   


.. conda:package:: segzoo

   |downloads_segzoo| |docker_segzoo|

   :versions:
      
      

      ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.7-0``

      

   
   :depends on ggd: 
   :depends on pybedtools: 
   :depends on python: ``>=3.7``
   :depends on seaborn: 
   :depends on segtools: 
   :depends on snakemake-minimal: 

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

    pixi global install segzoo

to add into an existing workspace instead, run::

    pixi add segzoo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install segzoo

Alternatively, to install into a new environment, run::

    conda create -n envname segzoo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/segzoo:<tag>

(see `segzoo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_segzoo| image:: https://img.shields.io/conda/dn/bioconda/segzoo.svg?style=flat
   :target: https://anaconda.org/bioconda/segzoo
   :alt:   (downloads)
.. |docker_segzoo| image:: https://quay.io/repository/biocontainers/segzoo/status
   :target: https://quay.io/repository/biocontainers/segzoo
.. _`segzoo/tags`: https://quay.io/repository/biocontainers/segzoo?tab=tags


.. raw:: html

    <script>
        var package = "segzoo";
        var versions = ["1.0.13","1.0.12","1.0.11","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segzoo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segzoo/README.html
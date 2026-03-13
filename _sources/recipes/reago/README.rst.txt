:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reago'
.. highlight: bash

reago
=====

.. conda:recipe:: reago
   :replaces_section_title:
   :noindex:

   An assembly tool for 16S ribosomal RNA recovery from metagenomic data

   :homepage: https://github.com/chengyuan/reago-1.1
   :license: Unknown
   :recipe: /`reago <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reago>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reago/meta.yaml>`_

   


.. conda:package:: reago

   |downloads_reago| |docker_reago|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``

      

   
   :depends on genometools-genometools: 
   :depends on infernal: ``==1.1.1``
   :depends on networkx: 
   :depends on python: ``2.7*``

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

    pixi global install reago

to add into an existing workspace instead, run::

    pixi add reago

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install reago

Alternatively, to install into a new environment, run::

    conda create -n envname reago

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/reago:<tag>

(see `reago/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_reago| image:: https://img.shields.io/conda/dn/bioconda/reago.svg?style=flat
   :target: https://anaconda.org/bioconda/reago
   :alt:   (downloads)
.. |docker_reago| image:: https://quay.io/repository/biocontainers/reago/status
   :target: https://quay.io/repository/biocontainers/reago
.. _`reago/tags`: https://quay.io/repository/biocontainers/reago?tab=tags


.. raw:: html

    <script>
        var package = "reago";
        var versions = ["1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reago/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reago/README.html
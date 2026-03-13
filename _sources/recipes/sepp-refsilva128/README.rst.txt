:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sepp-refsilva128'
.. highlight: bash

sepp-refsilva128
================

.. conda:recipe:: sepp-refsilva128
   :replaces_section_title:
   :noindex:

   SATe\-enabled phylogenetic placement

   :homepage: https://github.com/smirarab/sepp-refs
   :license: GPL3 / GPLv3
   :recipe: /`sepp-refsilva128 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sepp-refsilva128>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sepp-refsilva128/meta.yaml>`_
   :links: biotools: :biotools:`sepp-refsilva128`

   


.. conda:package:: sepp-refsilva128

   |downloads_sepp-refsilva128| |docker_sepp-refsilva128|

   :versions:
      
      

      ``4.5.1-1``,  ``4.5.1-0``,  ``4.3.6-0``

      

   

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

    pixi global install sepp-refsilva128

to add into an existing workspace instead, run::

    pixi add sepp-refsilva128

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sepp-refsilva128

Alternatively, to install into a new environment, run::

    conda create -n envname sepp-refsilva128

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sepp-refsilva128:<tag>

(see `sepp-refsilva128/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sepp-refsilva128| image:: https://img.shields.io/conda/dn/bioconda/sepp-refsilva128.svg?style=flat
   :target: https://anaconda.org/bioconda/sepp-refsilva128
   :alt:   (downloads)
.. |docker_sepp-refsilva128| image:: https://quay.io/repository/biocontainers/sepp-refsilva128/status
   :target: https://quay.io/repository/biocontainers/sepp-refsilva128
.. _`sepp-refsilva128/tags`: https://quay.io/repository/biocontainers/sepp-refsilva128?tab=tags


.. raw:: html

    <script>
        var package = "sepp-refsilva128";
        var versions = ["4.5.1","4.5.1","4.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sepp-refsilva128/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sepp-refsilva128/README.html
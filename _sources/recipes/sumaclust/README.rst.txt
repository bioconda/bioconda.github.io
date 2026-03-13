:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sumaclust'
.. highlight: bash

sumaclust
=========

.. conda:recipe:: sumaclust
   :replaces_section_title:
   :noindex:

   Sumaclust clusters sequences in a way that is fast and exact at the same time\, using the same clustering algorithm as UCLUST and CD\-HIT. For more information see url.

   :homepage: https://git.metabarcoding.org/obitools/sumaclust/wikis/home
   :license: CeCILL FREE SOFTWARE LICENSE AGREEMENT
   :recipe: /`sumaclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sumaclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sumaclust/meta.yaml>`_

   


.. conda:package:: sumaclust

   |downloads_sumaclust| |docker_sumaclust|

   :versions:
      
      

      ``1.0.31-7``,  ``1.0.31-6``,  ``1.0.31-5``,  ``1.0.31-4``,  ``1.0.31-3``,  ``1.0.31-2``,  ``1.0.31-1``,  ``1.0.31-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install sumaclust

to add into an existing workspace instead, run::

    pixi add sumaclust

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sumaclust

Alternatively, to install into a new environment, run::

    conda create -n envname sumaclust

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sumaclust:<tag>

(see `sumaclust/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sumaclust| image:: https://img.shields.io/conda/dn/bioconda/sumaclust.svg?style=flat
   :target: https://anaconda.org/bioconda/sumaclust
   :alt:   (downloads)
.. |docker_sumaclust| image:: https://quay.io/repository/biocontainers/sumaclust/status
   :target: https://quay.io/repository/biocontainers/sumaclust
.. _`sumaclust/tags`: https://quay.io/repository/biocontainers/sumaclust?tab=tags


.. raw:: html

    <script>
        var package = "sumaclust";
        var versions = ["1.0.31","1.0.31","1.0.31","1.0.31","1.0.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sumaclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sumaclust/README.html
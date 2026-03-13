:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beast2-xml'
.. highlight: bash

beast2-xml
==========

.. conda:recipe:: beast2-xml
   :replaces_section_title:
   :noindex:

   Command line script and Python class for generating BEAST2 XML config files.

   :homepage: https://github.com/acorg/beast2-xml
   :license: MIT
   :recipe: /`beast2-xml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast2-xml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast2-xml/meta.yaml>`_

   


.. conda:package:: beast2-xml

   |downloads_beast2-xml| |docker_beast2-xml|

   :versions:
      
      

      ``1.5.1-0``,  ``1.5.0-0``

      

   
   :depends on dark-matter: ``>=1.1.28``
   :depends on ete3: ``>=3.1.3``
   :depends on numpy: ``>=1.10.0``
   :depends on pandas: ``>=2.2.2``
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on six: ``>=1.16.0``

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

    pixi global install beast2-xml

to add into an existing workspace instead, run::

    pixi add beast2-xml

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install beast2-xml

Alternatively, to install into a new environment, run::

    conda create -n envname beast2-xml

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/beast2-xml:<tag>

(see `beast2-xml/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_beast2-xml| image:: https://img.shields.io/conda/dn/bioconda/beast2-xml.svg?style=flat
   :target: https://anaconda.org/bioconda/beast2-xml
   :alt:   (downloads)
.. |docker_beast2-xml| image:: https://quay.io/repository/biocontainers/beast2-xml/status
   :target: https://quay.io/repository/biocontainers/beast2-xml
.. _`beast2-xml/tags`: https://quay.io/repository/biocontainers/beast2-xml?tab=tags


.. raw:: html

    <script>
        var package = "beast2-xml";
        var versions = ["1.5.1","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beast2-xml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beast2-xml/README.html